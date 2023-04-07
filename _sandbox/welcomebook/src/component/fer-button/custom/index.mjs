export const styleOpacity = (self) => {
    if(self.dataset.type === 'welcome-menu') {
        const fontSize = 30
        const stepFontSize = 4
        const currentItem = self.shadowRoot.querySelector('p')
        const id = parseInt(self.dataset.id, 10)
        const opacity = 100 - 5 * id
        const currentFontSize = fontSize - stepFontSize * id
        currentItem.style.opacity = `${opacity}%`
        currentItem.style.fontSize = `${currentFontSize}px`
    }
}