export default async (self, actions) => {
    let section = self.assignedSlot.closest('section')
    let observer = new MutationObserver(actions.mutationObserver);

    return {
        init: () => {
            section.addEventListener("animationiteration", actions.animationiteration);
            section.addEventListener("animationstart", actions.animationstart);
            section.addEventListener('animationend', actions.animationend);
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
            section.removeEventListener("animationiteration", actions.animationiteration);
            section.removeEventListener("animationstart", actions.animationstart);
            section.removeEventListener('animationend', actions.animationend);
            let mutationRecords =  observer.takeRecords()
            observer.disconnect();
        }
    }
}