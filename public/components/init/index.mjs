export default () => {
  return new Promise(async (resolve, reject) => {
    const self = window.document.body
    self.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    let slot = document.createElement('slot')
    slot.name = 'dex-main'
    style.innerText = `@import "./template/css/default/index.css";`
    self.shadowRoot.appendChild(slot)
    self.shadowRoot.appendChild(style)
    resolve(self.shadowRoot)
  })
}
