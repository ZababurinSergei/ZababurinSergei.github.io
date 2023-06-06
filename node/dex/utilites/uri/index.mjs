import { len } from '../python/index.mjs'


const ValueError = (message) => {
    console.error('== ERROR ==', message)
    debugger
}

export const uri_prefix = (uri, max_pieces= 3) => {
    /**
     Strip off components that might make a ConceptNet URI too detailed. Only
     the first `max_pieces` components will be kept.

     By default, `max_pieces` is 3, making this function useful for converting
     disambiguated concepts into their more general ambiguous forms.

     If the URI is actually a fully qualified URL, no components are removed.

     >>> uri_prefix('/c/en/cat/n/animal')
     '/c/en/cat'
     >>> uri_prefix('/c/en/cat/n')
     '/c/en/cat'
     >>> uri_prefix('/c/en/cat')
     '/c/en/cat'
     >>> uri_prefix('/c/en')
     '/c/en'
     >>> uri_prefix('/c/en/cat', 2)
     '/c/en'
     >>> uri_prefix('http://en.wikipedia.org/wiki/Example')
     'http://en.wikipedia.org/wiki/Example'
     */

    if (is_absolute_url(uri)) {
        return uri
    }

    let pieces = split_uri(uri)
    pieces.splice(max_pieces + 1)
    const term = join_uri(pieces, '/')

    return term
}
export const ltrim = (x, characters) => {
    let start = 0;

    while (characters.indexOf(x[start]) > 0) {
        start += 1;
    }

    let end = x.length;
    return x.substring(start, x.length - 1);
}

export const is_absolute_url = (uri) => {
    /**
     We have URLs pointing to Creative Commons licenses, starting with 'cc:',
     which for Linked Data purposes are absolute URLs because they'll be resolved
     into full URLs.

     >>> is_absolute_url('http://fr.wiktionary.org/wiki/mįkká’e_uxpáðe')
     True
     >>> is_absolute_url('/c/fr/nouveau')
     False
     */
    return uri.startsWith('http') || uri.startsWith('cc:')
}
export const uri_to_label = (uri) => {
    /**
     Convert a ConceptNet uri into a label to be used in nodes. This function
     replaces an underscore with a space, so while '/c/en/example' will be
     converted into 'example', '/c/en/canary_islands' will be converted into
     'canary islands'.

     >>> uri_to_label('/c/en/example')
     'example'
     >>> uri_to_label('/c/en/canary_islands')
     'canary islands'
     >>> uri_to_label('/c/en')
     ''
     >>> uri_to_label('/r/RelatedTo')
     'RelatedTo'
     >>> uri_to_label('http://wikidata.dbpedia.org/resource/Q89')
     'Q89'
     */
    if(is_absolute_url(uri)) {
        let tmp = uri.split('/')
        tmp = tmp[tmp.length - 1]
        return tmp.replace('_', ' ')
    }
}
export const is_term = (uri) => {
    /**
     >>> is_term('/c/sv/kostym')
     True
     >>> is_term('/x/en/ify')
     True
     >>> is_term('/a/[/r/RelatedTo/,/c/en/cake/,/c/en/flavor/]')
     False
     */
    return uri.startsWith('/c/') || uri.startsWith('/x/')
}
export const join_uri = (obj, sep='') => {
    return obj.join(sep)
}

export const parse_compound_uri = (uri) => {

    /**
     Given a compound URI, extract its operator and its list of arguments.

     >>> parse_compound_uri('/nothing/[/]')
     ('/nothing', [])
     >>> parse_compound_uri('/a/[/r/CapableOf/,/c/en/cat/,/c/en/sleep/]')
     ('/a', ['/r/CapableOf', '/c/en/cat', '/c/en/sleep'])
     >>> parse_compound_uri('/or/[/and/[/s/one/,/s/two/]/,/and/[/s/three/,/s/four/]/]')
     ('/or', ['/and/[/s/one/,/s/two/]', '/and/[/s/three/,/s/four/]'])
     */

    let pieces = {}
    let list_start = {}
    let op = {}
    let chunks = []
    let current = []
    let depth = 0

    pieces = split_uri(uri)

    if(pieces[-1] !== ']') {
         ValueError("Compound URIs must end with /]")
    }

    if(pieces.indexOf('[') === -1) {
        ValueError("Compound URIs must contain /[/ at the beginning of the argument list")
    }

    // list_start = pieces.index('[')
    // op = join_uri(*pieces[:list_start])

    /**
     # Split on commas, but not if they're within additional pairs of brackets.
     */

    // for piece in pieces[(list_start + 1) : -1] {
    //     if(piece === ',' && depth == 0) {
    //         chunks.append('/' + ('/'.join(current)).strip('/'))
    //         current = []
    //     } else {
    //         current.append(piece)
    //         if( piece === '[') {
    //             depth += 1
    //         } else if(piece === ']') {
    //             depth -= 1
    //         }
    //     }
    // }

    console.assert(depth === 0, `Unmatched brackets in ${uri}`)

    if (current){
        chunks.push('/' + ('/'.join(current)).strip('/'))
    }

    return {
        op: op,
        chunks: chunks
    }
}
export const parse_possible_compound_uri = (op, uri) => {
    /**
     The AND and OR conjunctions can be expressed as compound URIs, but if they
     contain only one thing, they are returned as just that single URI, not a
     compound.

     This function returns the list of things in the compound URI if its operator
     matches `op`, or a list containing the URI itself if not.

     >>> parse_possible_compound_uri(
     ...    'or', '/or/[/and/[/s/one/,/s/two/]/,/and/[/s/three/,/s/four/]/]'
     ... )
     ['/and/[/s/one/,/s/two/]', '/and/[/s/three/,/s/four/]']
     >>> parse_possible_compound_uri('or', '/s/contributor/omcs/dev')
     ['/s/contributor/omcs/dev']
     */
    if (uri.startsWith('/' + op + '/')) {
        return parse_compound_uri(uri)[1]
    } else {
        return [uri]
    }
}
export const get_uri_language = (uri) => {
    /**
     Extract the language from a concept URI. If the URI points to an assertion,
     get the language of its first concept.

     >>> get_uri_language('/a/[/r/RelatedTo/,/c/en/orchestra/,/c/en/symphony/]')
     'en'
     >>> get_uri_language('/c/pl/cześć')
     'pl'
     >>> get_uri_language('/x/en/able')
     'en'
     */
    if (uri.startsWith('/a/')){
        return get_uri_language(parse_possible_compound_uri('a', uri)[1])
    } else if(is_term(uri)) {
        return split_uri(uri)[2]
    } else {
        return undefined
    }
}

export const split_uri = (uri) => {
    /**
     Get the slash-delimited pieces of a URI.

     >>> split_uri('/c/en/cat/n/animal')
     ['c', 'en', 'cat', 'n', 'animal']
     >>> split_uri('/')
     []
     */
    let uri2 = {}

    if(!uri.startsWith('/')) {
        return [uri]
    }

    uri2 = uri.trim()

    if(!uri2) {
        return []
    }

    return uri2.split('/')
}
export const compound_uri = (op, args) => {
    /**
     Some URIs represent a compound structure or operator built out of a number
     of arguments. Some examples are the '/and' and '/or' operators, which
     represent a conjunction or disjunction over two or more URIs, which may
     themselves be compound URIs; or the assertion structure, '/a', which takes
     a relation and two URIs as its arguments.

     This function takes the main 'operator', with the slash included, and an
     arbitrary number of arguments, and produces the URI that represents the
     entire compound structure.

     These structures contain square brackets as segments, which look like
     `/[/` and `/]/`, so that compound URIs can contain other compound URIs
     without ambiguity.

     >>> compound_uri('/nothing', [])
     '/nothing/[/]'
     >>> compound_uri('/a', ['/r/CapableOf', '/c/en/cat', '/c/en/sleep'])
     '/a/[/r/CapableOf/,/c/en/cat/,/c/en/sleep/]'
     */
    let items = [op]
    let first_item = true
    items.push('[')
    for(let item of args) {
        if(first_item) {
            first_item = false
        } else {
            items.push(',')
        }
        items.push(item)
    }
    items.push(']')
    return join_uri(items)
}
export const conjunction_uri = (sources) => {

    /**
     Make a URI representing a conjunction of sources that work together to provide
     an assertion. The sources will be sorted in lexicographic order.

     >>> conjunction_uri('/s/contributor/omcs/dev')
     '/s/contributor/omcs/dev'

     >>> conjunction_uri('/s/rule/some_kind_of_parser', '/s/contributor/omcs/dev')
     '/and/[/s/contributor/omcs/dev/,/s/rule/some_kind_of_parser/]'
     */

    if(len(sources) === 0) {
        /**
         # Logically, a conjunction with 0 inputs represents 'True', a
         # proposition that cannot be denied. This could be useful as a
         # justification for, say, mathematical axioms, but when it comes to
         # ConceptNet, that kind of thing makes us uncomfortable and shouldn't
         # appear in the data.
         */
        ValueError("Conjunctions of 0 things are not allowed")
    } else if(len(sources) === 1) {
        return sources[0]
    } else {
        let array = []
        for(let key in sources) {
            array.push(sources[key])
        }
        const set = new Set(array)
        const sortedArray = Array.from(set).sort();
        return compound_uri('/and', sortedArray)
    }
}

