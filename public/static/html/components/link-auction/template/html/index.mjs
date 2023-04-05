import compoenents from './default/index.mjs'

export const loadHTML = (htmlRelativeUrl, baseUrl) => {
    // fetch resolves relative url using the document base URL
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    return fetch(htmlUrl).then(response => response.text());
}

export default  compoenents