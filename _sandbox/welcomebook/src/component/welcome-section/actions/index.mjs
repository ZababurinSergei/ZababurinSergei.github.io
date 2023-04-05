export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            mutationObserver: (mutations) => {
                mutations.forEach(function(mutation) {
                    console.log('mutation',mutation.target.classList);

                    // if (mutation.oldValue === 'search-trigger') {
                    //     document.getElementsByTagName('body')[0].classList.add('noscroll');
                    // } else {
                    //     document.getElementsByTagName('body')[0].classList.remove('noscroll');
                    // }
                });
            }
        })
    })
}
