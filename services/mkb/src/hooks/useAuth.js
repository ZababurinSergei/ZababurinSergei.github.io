import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { getRefreshToken, getTokenPair, getUserInfo } from '@src/modules/api';
import { useEffect, useState } from 'react';
import isEmpty from '../utilites/isEmpty';

const signIn = () => {
  const isPredProd = window.location.hostname.includes(process.env.REACT_APP_PREFIX_PREDPROD);
  const isProd = window.location.hostname.includes(process.env.REACT_APP_PREFIX_MASTER);
  const isDev = window.location.hostname.includes(process.env.REACT_APP_PREFIX_DEV)

  let egiszUrl = '';

  if(isDev) {
    egiszUrl = process.env.REACT_APP_EGISZ_URL_DEV_AUTH
  }

  if (isPredProd) {
    egiszUrl = process.env.REACT_APP_EGISZ_URL_PREDPROD_AUTH
  }

  if (isProd) {
    egiszUrl = process.env.REACT_APP_EGISZ_URL_MASTER_AUTH
  }


  window.location.href = egiszUrl;
};

export const logOut = () => {
  const isPredProd = window.location.hostname.includes(process.env.REACT_APP_PREFIX_PREDPROD);
  const isDev = window.location.hostname.includes(process.env.REACT_APP_PREFIX_DEV);
  const isProd = window.location.hostname.includes(process.env.REACT_APP_PREFIX_MASTER);

  let egiszUrlLogout = '';

  if(isDev) {
    egiszUrlLogout = process.env.REACT_APP_EGISZ_URL_DEV_LOGOUT
  }

  if (isPredProd) {
    egiszUrlLogout = process.env.REACT_APP_EGISZ_URL_PREDPROD_LOGOUT
  }

  if(isProd) {
    egiszUrlLogout = process.env.REACT_APP_EGISZ_URL_MASTER_LOGOUT
  }



  window.location.href = egiszUrlLogout;
};

export const useAuth = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');
  const [userInfo, setUserInfo] = useState(null);
  const [alreadyUsedCode, setAlreadyUsedCode] = useLocalStorage(
    'alreadyUsedCode',
    '',
  );

  useEffect(() => {
    const interval = setInterval(
      () => {
        const refresh = window.localStorage.getItem('refreshToken');
        if (!isEmpty(refresh)) {
          getRefreshToken(refresh)
            .then(({ data }) => {
              window.localStorage.setItem('accessToken', data.accessToken);
              window.localStorage.setItem('refreshToken', data.accessToken);
            })
            .catch(error => {});
        }
      },
      process.env.REACT_APP_CUSTOM_TOKEN_TTL
        ? process.env.REACT_APP_CUSTOM_TOKEN_TTL
        : 280000,
    );

    return () => clearInterval(interval);
  }, []);
  const resetTokens = () => {
    setAccessToken('');
    setRefreshToken('');
  };

  const params = new URLSearchParams(document.location.search);
  const code = params.get('code');
  if (code?.length && code !== alreadyUsedCode) {
    try {
      getTokenPair(code)
        .then(data => {
          if (!isEmpty(data) && data.status === 200) {
            setAccessToken(data.data.accessToken);
            setRefreshToken(data.data.refreshToken);
            setUserInfo(data.data.userinfo);
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setAlreadyUsedCode(code));
    } catch (error) {
      console.log(error);
    }
  } else {
    if (accessToken) {
      try {
        getUserInfo(accessToken)
          .then(({ data }) => {
            !userInfo && setUserInfo(data);
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
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            setUserInfo(data.userinfo);
          })
          .catch(error => {
            if (error.request.status !== 500) {
              console.log(error);
              setRefreshToken('');
              setUserInfo('');
              logOut();
            } else {
              setRefreshToken('');
              setUserInfo('');
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

  return { userInfo, resetTokens, signIn, logOut, accessToken };
};
