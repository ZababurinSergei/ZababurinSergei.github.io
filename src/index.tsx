import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

export default (symbol: symbol, mountPoint: any) => {
    return new Promise((resolve, reject) => {
        // let root:ReactDOM.Root = ReactDOM.createRoot(mountPoint.querySelector('#root'));
        let root:any = ReactDOM.createRoot(mountPoint.querySelector('#root'));

        // let styles:NodeListOf<HTMLStyleElement> = document.head.querySelectorAll('style')
        // for (const style of styles) {
        //     mountPoint.appendChild(style)
        // }

        root[symbol] = {
            'app': <App />,
            'mount': mountPoint
        };

        resolve(root)
    })
}
