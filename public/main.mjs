
export default async (mountPoint, Context) => {
    const shadow = mountPoint.attachShadow({mode: "open"});
    let template = document.querySelector('#system')
    let systemContent = template.content;
    shadow.prepend(systemContent);
}