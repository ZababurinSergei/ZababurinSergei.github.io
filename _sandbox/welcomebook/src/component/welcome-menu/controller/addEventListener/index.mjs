export default async (self, actions) => {

    return {
        init: () => {
            window.addEventListener('fer-button', actions.ferButton)
        },
        termminate: () => {
            window.removeEventListener('fer-button', actions.ferButton)
        }
    }

}