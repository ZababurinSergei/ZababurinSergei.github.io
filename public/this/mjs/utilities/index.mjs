export const loadHTML = (htmlRelativeUrl, baseUrl = import.meta.url) => {
    const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
    console.log('dddddddddddddddddddddddd', htmlUrl)
    return fetch(htmlUrl).then(response => response.text());
}

export default {
    description: 'utilities for this project'
}