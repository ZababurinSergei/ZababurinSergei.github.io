import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

export default (symbol: symbol, mountPoint: any) => {
    return new Promise((resolve, reject) => {
        let root:any = ReactDOM.createRoot(mountPoint.querySelector('#root'));

        root[symbol] = {
            'app': <App />,
            'mount': mountPoint
        };

        resolve(root)
    })
}
