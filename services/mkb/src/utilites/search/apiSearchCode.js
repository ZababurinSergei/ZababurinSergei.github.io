import axios from '@src/utilites/API';
import * as links from './links';
import {search} from './index';

/**
 * @description Getting an entity by code
 * @param {string} code - The code by which the entity will be searched
 * @returns {object[]|[]} Result of search
 */
export async function apiSearchCode(code) {
	let result = [];
	try {
		const response = await axios.get(`${links.URL_SEARCH_LINEAR_CODE}${code.toUpperCase().trim()}`);
		response.entity = response.data;
		response.entity.isBlueTitle = false;
		response.title = response.entity.title['@value'];
		response.uri = response.entity['@id'].replace(links.URL_PREF_BASE, '/v1');
		delete response.entity.indexTerm;
		result.push(response);
	} catch(error) {
		console.log(error);
	} finally {
		return result;
	}
}
