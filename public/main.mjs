export default async (mountPoint, Context) => {
    const shadow = mountPoint.attachShadow({mode: "open"});
    const template = document.querySelector('#system')
    const systemContent = template.content;
    shadow.prepend(systemContent);
}