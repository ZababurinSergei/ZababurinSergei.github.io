export default async (self, actions) => {

    const link = self.shadowRoot.querySelector('p')

    return {
        init: () => {
            link.addEventListener('click', actions.click)
            window.addEventListener('popstate', actions.popstate);
            if (self.dataset.role === 'aside') {
                window.document.addEventListener(`${self.dataset.type}_${self.dataset.role}`, actions.customEvents);
            }
        },
        termminate: () => {
            link.removeEventListener('click', self.push)
            window.removeEventListener('popstate', self.events);

            if (self.dataset.role === 'aside') {
                window.document.removeEventListener(`${self.dataset.type}_${self.dataset.role}`, self.customEvents);
            }
        }
    }

}