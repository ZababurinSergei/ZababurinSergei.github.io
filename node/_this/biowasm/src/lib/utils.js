import api from './fetch/index.mjs';
const CONFIG = await api.get('tools')
export function getToolURL(toolName, versionName, fileName) {
    let url = `${CONFIG.url}`;
    if(toolName)
    {url += `/${toolName}`;}
    if(versionName)
    {url += `/${versionName}`;}
    if(fileName)
    {url += `/${fileName}`;}
    return url;
}

export default getToolURL
