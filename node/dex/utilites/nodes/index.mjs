import {is_term, uri_to_label, split_uri, get_uri_language, uri_prefix} from '../uri/index.mjs'
import { len } from '../python/index.mjs'
export const ld_node = (uri, label= undefined) => {
    /**
     Convert a ConceptNet URI into a dictionary suitable for Linked Data.
     */
    if(!label) {
        label = uri_to_label(uri)
    }

    let ld = {'@id': uri, 'label': label}
    let pieces = {};
    let domain = {};

    if(is_term(uri)) {
        pieces = split_uri(uri)
        ld['language'] = get_uri_language(uri)
        /**
         # Get a reasonably-distinct sense label for the term.
         # Usually it will be the part of speech, but when we have fine-grained
         # information from Wikipedia or WordNet, it'll include the last
         # component as well.
         */
        if(len(pieces) > 3) {
            ld['sense_label'] = pieces[3]
        }

        if(len(pieces) > 4 && ['wp', 'wn'].includes(pieces[4])) {
            ld['sense_label'] += ', ' + pieces[pieces.length -1]
        }

        ld['term'] = uri_prefix(uri)
        ld['@type'] = 'Node'
    } else if(uri.startsWith('http')) {
    //
    //     domain = urlparse(uri).netloc
    //     ld['site'] = domain
    //     ld['term'] = uri

        /**
         # OpenCyc is down and UMBEL doesn't host their vocabulary on the
         # Web. This property indicates whether you can follow a link
         # via HTTP and retrieve more information.
         */

        // ld['site_available'] = true
        // if(domain in {'sw.opencyc.org', 'umbel.org', 'wikidata.dbpedia.org'}) {
        //     ld['site_available'] = false
        // }
        // ld['path'] = urlparse(uri).path
        // ld['@type'] = 'Node'
    } else if(uri.startsWith('/r/')) {
        ld['@type'] = 'Relation'
    }

    return ld
}