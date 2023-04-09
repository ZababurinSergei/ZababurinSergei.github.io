import { activeClass } from '../../../this/index.mjs'
export const initSections = (self) => {
   return new Promise((resolve, reject) => {
        let menu = document.body.querySelector('welcome-menu')
        let buttons = menu.querySelectorAll('fer-button')

        resolve({
           current: () => {
               for (let item of buttons) {
                   if (item.classList.contains(activeClass)) {
                       return parseInt(item.dataset.id, 10)
                   }
               }
               return 0
           },
           clearClass: (section) => {
               if (section.classList.contains('animation')) {
                   section.classList.remove('animation')
               }

               if (section.classList.contains('animation2')) {
                   section.classList.remove('animation2')
               }

               if (section.classList.contains('animation3')) {
                   section.classList.remove('animation3')
               }

               if (section.classList.contains('animation4')) {
                   section.classList.remove('animation4')
               }

               if (section.classList.contains('animation5')) {
                   section.classList.remove('animation5')
               }
           }
       })
    })
};