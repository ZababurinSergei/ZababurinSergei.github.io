export default async (self, actions) => {
    let component = self.shadowRoot === null
        ? self
        : self.shadowRoot


    let observer = new MutationObserver(actions.mutationObserver);

    return {
        init: () => {
            observer.observe(self.assignedSlot.closest('section'), {
                attributes: true,
                attributeFilter: ["class"],
                characterData: false,
                childList: false,
                subtree: false,
                attributeOldValue: false,
                characterDataOldValue: false
            });
        },
        termminate: () => {
            // let mutationRecords =  observer.takeRecords()
            // observer.disconnect();
        }
    }

}