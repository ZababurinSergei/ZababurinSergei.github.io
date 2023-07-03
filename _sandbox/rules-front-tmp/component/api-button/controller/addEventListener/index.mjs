export default async (self, actions) => {

    const link = self.shadowRoot.querySelector('p')

    return {
        init: () => {
            link.addEventListener('click', actions.click)
            window.addEventListener('popstate', actions.popstate);
            document.addEventListener('api-button-enable-or-disable', actions.apiButtonEnableOrDisable)
            if (self.dataset.role === 'aside') {
                window.document.addEventListener(`${self.dataset.type}_${self.dataset.role}`, actions.customEvents);
            }
        },
        terminate: () => {
            link.removeEventListener('click', self.push)
            window.removeEventListener('popstate', self.events);
            document.removeEventListener('api-button-enable-or-disable', actions.apiButtonEnableOrDisable)
            if (self.dataset.role === 'aside') {
                window.document.removeEventListener(`${self.dataset.type}_${self.dataset.role}`, self.customEvents);
            }
        }
    }

}