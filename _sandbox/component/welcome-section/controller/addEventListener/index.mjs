export default async (self, actions) => {
    let section = self.assignedSlot.closest('section')
    let observer = new MutationObserver(actions.mutationObserver);


    return {
        init: () => {
            if (self.addEventListener) {
                if ('onwheel' in document) {
                    self.addEventListener("wheel", actions.onWheel);
                } else if ('onmousewheel' in document) {
                    self.addEventListener("mousewheel", actions.onWheel);
                } else {
                    self.addEventListener("MozMousePixelScroll", actions.onWheel);
                }
            } else {
                self.attachEvent("onmousewheel", actions.onWheel);
            }
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
            if (self.addEventListener) {
                if ('onwheel' in document) {
                    self.removeEventListener("wheel", actions.onWheel);
                } else if ('onmousewheel' in document) {
                    self.removeEventListener("mousewheel", actions.onWheel);
                } else {
                    self.removeEventListener("MozMousePixelScroll", actions.onWheel);
                }
            } else {
                self.detachEvent("onmousewheel", actions.onWheel);
            }
            let mutationRecords =  observer.takeRecords()
            observer.disconnect();
        }
    }
}