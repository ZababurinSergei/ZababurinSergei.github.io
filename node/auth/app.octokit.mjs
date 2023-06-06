import Octokit from "@octokit/rest";


export default ()=> new Promise((resolve) => {
        let object = {}
        object['Octokit'] = Octokit
        resolve(object)
});
