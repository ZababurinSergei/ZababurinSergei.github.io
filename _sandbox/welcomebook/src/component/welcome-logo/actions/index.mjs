import { anime } from '../views/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            click: (event) => {
                window.dispatchEvent(new CustomEvent('change-views', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        id: parseInt(self.parentNode.dataset.id, 10),
                        type: 'transform',
                        action: `to`
                    }
                }));
            },
            mouseenter: (event) => {
                const outsideSquare = self.shadowRoot.querySelector('.welcome-logo')
                const insideSquare = self.shadowRoot.querySelector('.square-buttom')

                outsideSquare.style.transform = 'rotate(' + 90 + 'deg) scale(1.5)';
                outsideSquare.style.opacity = 1;
                insideSquare.style.transform = 'rotate(' + -90 + 'deg) scale(0.7)';
                insideSquare.style.opacity = 1;
            },
            mouseleave: (event) => {
                const outsideSquare = self.shadowRoot.querySelector('.welcome-logo')
                const insideSquare = self.shadowRoot.querySelector('.square-buttom')
                outsideSquare.style.transform = 'rotate(' + 45 + 'deg) scale(1)';
                outsideSquare.style.opacity = 0.5;

                insideSquare.style.transform = 'rotate(' + -45 + 'deg) scale(1)';
                insideSquare.style.opacity = 0.5;
            }
        })
    })
}
