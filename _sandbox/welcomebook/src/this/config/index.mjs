let isMain = true
export const config = {
    page: {
        isMain: {
            set: (value) => {
                isMain = value
            },
            get: () => isMain
        },
        first: {
            isDynamic: true
        }
    }
}