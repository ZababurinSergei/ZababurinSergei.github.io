// import { anime } from '../views/index.mjs'
import { activeClass } from '../../../this/index.mjs'
export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            click: (event) => {
                let menu = self.getRootNode().querySelector('welcome-menu')
                menu = menu.querySelector(`.${activeClass}`)
                // console.log('dddddddddddddddddddd', menu, parseInt(menu.dataset.id, 10) )
                window.dispatchEvent(new CustomEvent('change-views', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        id: menu.dataset.id,
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
