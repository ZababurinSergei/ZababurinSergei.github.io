import lexer from './lexer.js'
import parser from './parser.js'
import {format} from './format.js'
import {toHTML} from './stringify.js'
import {
  voidTags,
  closingTags,
  childlessTags,
  closingTagAncestorBreakers
} from './tags.js'
import beautify from '../json-beautify/index.mjs'

export const parseDefaults = {
  voidTags,
  closingTags,
  childlessTags,
  closingTagAncestorBreakers,
  includePositions: false
}

export function parse (str, options = parseDefaults) {
  const tokens = lexer(str, options)
  const nodes = parser(tokens, options)
  return format(nodes, options)
}

export function stringify (ast, options = parseDefaults) {
  return toHTML(ast, options)
}

export const json = (obj) => {
  return  beautify(obj, null, 2, 80)
}

export default {
  stringify: stringify,
  parse: parse,
  json: json
}