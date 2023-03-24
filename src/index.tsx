import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
export default (symbol, mountPoint) => {
    return new Promise((resolve, reject) => {
        const root = ReactDOM.createRoot(mountPoint.querySelector('#root'));

        let styles = document.head.querySelectorAll('style')

        for (const style of styles) {
            mountPoint.appendChild(style)
        }

        root[symbol] = {
            'app': <App />,
            'mount': mountPoint
        }

        resolve(root)
    })
}
