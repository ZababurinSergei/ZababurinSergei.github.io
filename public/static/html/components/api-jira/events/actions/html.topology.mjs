export default () => {
    let element = window.document.body.querySelector('#html_topology')
    
    if(element !== null) {
        element.remove();   
    } else {
        let style = window.document.createElement('style')
        style.id = 'html_topology'
        style.textContent = "@import '/CSS/index.topology.css'"
        window.document.body.appendChild(style)
    }

    return true
}