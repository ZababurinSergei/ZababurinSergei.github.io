import { store, isEmpty } from '../../../index.mjs'

export async function getTokenPair(code) {
    try {
        // const data = await api.post('/auth/code', {
        //     code
        // })
        // return data;
    } catch (e) {
        console.error('не был получен токкен')
    }
}

export async function getUserInfo(accessToken) {
    if(accessToken) {
        // const data = await api.get('/auth/userinfo', {
            // withCredentials: true,
            // headers: {
            //     'Authorization': `Bearer ${accessToken}`
            // }
        // })
        // return data;
    } else {
        // console.log('авторизация: нет токкена')
        return  []
    }

}

export async function getRefreshToken(refreshToken) {
    // const data = await api.post('/auth/refresh', {
    //     refreshToken: refreshToken
    // })
    // return data;
}


export const signIn = () => {
    // const isPredProd = window.location.hostname.includes('rt-eu')
    // const isDevStand =
    //     window.location.hostname.includes('digitalms') ||
    //     window.location.hostname.includes('localhost');
    let egiszUrl = 'https://ia-test.egisz.rosminzdrav.ru/realms/dev/protocol/openid-connect/auth?client_id=fer-fmvr-dev&redirect_uri=http%3A%2F%2Ffer-fmvr-dev.helpms.ru&response_mod=query&response_type=code'
    // if(isPredProd) {
    //     egiszUrl = 'https://ia-test.egisz.rosminzdrav.ru/realms/master/protocol/openid-connect/auth?response_type=code&client_id=mkb11_test&response_mode=query&redirect_uri=https%3A%2F%2Fmkb11.rt-eu.ru%2F'
    // } else {
    //     egiszUrl = isDevStand
    //         ? 'https://ia-test.egisz.rosminzdrav.ru/realms/dev/protocol/openid-connect/auth?response_type=code&client_id=mkb11_dev&response_mode=query&redirect_uri=https%3A%2F%2Fmkb11-compose-dev.digitalms.ru%2F'
    //         : 'https://ia.egisz.rosminzdrav.ru/realms/master/protocol/openid-connect/auth?response_type=code&client_id=mkb11&response_mode=query&redirect_uri=https%3A%2F%2Fmkb11.egisz.rosminzdrav.ru%2F';
    // }
    window.location.href = egiszUrl;
};

export const logOut = () => {
    const isPredProd = window.location.hostname.includes('rt-eu')
    const isDevStand =
        window.location.hostname.includes('digitalms') ||
        window.location.hostname.includes('localhost');
    let egiszUrlLogout = ''

    if(isPredProd) {
        egiszUrlLogout = "https://ia-test.egisz.rosminzdrav.ru/realms/master/protocol/openid-connect/logout?client_id=mkb11_test&redirect_uri=https%3A%2F%2Fmkb11.rt-eu.ru%2F"
    } else {
        egiszUrlLogout = isDevStand
            ? 'https://ia-test.egisz.rosminzdrav.ru/realms/dev/protocol/openid-connect/logout?client_id=mkb11_dev&redirect_uri=https%3A%2F%2Fmkb11-compose-dev.digitalms.ru%2F'
            : 'https://ia.egisz.rosminzdrav.ru/realms/master/protocol/openid-connect/logout?client_id=mkb11&redirect_uri=https%3A%2F%2Fmkb11.egisz.rosminzdrav.ru%2F';
    }
    window.location.href = egiszUrlLogout;
};

export const resetTokens = () => {
    store.set('accessToken', '')
    store.set('refreshToken', '')
};

export const useAuth = () => {
    let accessToken = undefined
    let refreshToken = undefined
    let alreadyUsedCode = undefined
    let userInfo = undefined
    const interval = setInterval(() => {
        const refresh = store.get('refreshToken')
        if(!isEmpty(refresh)) {
            getRefreshToken(refresh)
                .then(({ data }) => {
                    store.set('accessToken', data.accessToken)
                    store.set('refreshToken', data.refreshToken)
                })
                .catch(error => { });
        }
    })

    const params = new URLSearchParams(document.location.search);
    const code = params.get('code');

    if (code?.length && code !== alreadyUsedCode) {
        try {
            getTokenPair(code)
                .then(data => {
                    if (!isEmpty(data) && data.status === 200) {
                        accessToken = data.data.accessToken
                        refreshToken = data.data.refreshToken
                        userInfo = data.data.userinfo
                        // setAccessToken(data.data.accessToken);
                        // setRefreshToken(data.data.refreshToken);
                        // setUserInfo(data.data.userinfo);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => alreadyUsedCode = code);
        } catch (error) {
            console.log(error);
        }
    } else {
        if (accessToken) {
            try {
                getUserInfo(accessToken)
                    .then(({ data }) => {
                        userInfo = data
                        // !userInfo && setUserInfo(data);
                    })
                    .catch(error => {
                        console.log(error);
                        setAccessToken('');
                    });
            } catch (error) {
                console.log(error);
            }
        } else if (refreshToken && !accessToken) {
            try {
                getRefreshToken(refreshToken)
                    .then(({ data }) => {
                        accessToken = data.data.accessToken
                        refreshToken = data.data.refreshToken
                        // setAccessToken(data.accessToken);
                        // setRefreshToken(data.refreshToken);
                        // setUserInfo(data.userinfo);
                    })
                    .catch(error => {
                        if(error.request.status !== 500) {
                            console.log(error);
                            refreshToken = ''
                            userInfo = ''
                            // setRefreshToken('');
                            // setUserInfo('');
                            logOut();
                        } else {
                            refreshToken = ''
                            userInfo = ''
                            // setRefreshToken('');
                            // setUserInfo('');
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
        // else if (!refreshToken && !accessToken) {
        //   (process.env.NODE_ENV === 'production') && signIn();
        // }
    }
}
