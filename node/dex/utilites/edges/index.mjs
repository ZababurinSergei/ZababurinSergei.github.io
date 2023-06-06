import { conjunction_uri } from '../uri/index.mjs'
import { ld_node } from '../nodes/index.mjs'
export const transform_for_linked_data = (edge) => {
    /**
     Modify an edge (assertion) in place to contain values that are appropriate
     for a Linked Data API.

     Although this code isn't actually responsible for what an API returns
     (see the conceptnet-web repository for that), it helps to deal with what
     edge dictionaries should contain here.

     The relevant changes are:

     - Remove the 'features' list
     - Rename 'uri' to '@id'
     - Make 'start', 'end', and 'rel' into dictionaries with an '@id' and
     'label', removing the separate 'surfaceStart' and 'surfaceEnd'
     attributes
     - All dictionaries should have an '@id'. For the edge itself, it's the
     URI. Without this, we get RDF blank nodes, which are awful.
     - Set '@type' on objects representing edges and sources. (Nodes get their
     @type from the `ld_node` function.)
     */
    let conj = {}
    let start_uri = {}
    let end_uri = {}
    let rel_uri = {}
    let start_label = {}
    let end_label = {}
    let None;
    None = undefined;
    if(edge.hasOwnProperty('features')) {
        delete edge['features']
    }

    for(let source of edge['sources']) {
        conj = conjunction_uri(source)
        source['@id'] = conj
        source['@type'] = 'Source'
    }

    edge['@id'] = edge['uri']
    delete edge['uri']
    edge['@type'] = 'Edge'
    start_uri = edge['start']
    end_uri = edge['end']
    rel_uri = edge['rel']
    start_label = edge['surfaceStart']
    end_label = edge['surfaceEnd']

    delete edge['surfaceStart']
    delete edge['surfaceEnd']
    edge['start'] = ld_node(start_uri, start_label)
    edge['end'] = ld_node(end_uri, end_label)
    edge['rel'] = ld_node(rel_uri, None)

    if(edge.hasOwnProperty('other')) {
        if(edge['other'] === start_uri) {
            edge['other'] = edge['start']
        } else if(edge['other'] === end_uri) {
            edge['other'] = edge['end']
        } else {
            console.log('-3_2 transform_for_linked_data', {
                rel_uri: rel_uri
            })
            edge['rel'] = ld_node(rel_uri, None)
        }
    }

    return edge
}