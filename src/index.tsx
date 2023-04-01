import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

export default (symbol: symbol, mountPoint: any, Context: any) => {
    return new Promise((resolve, reject) => {
        let root: any = ReactDOM.createRoot(mountPoint);

        let virtual: { app: JSX.Element, context: any } = {
            'app': <App actionContext={Context}/>,
            'context': (context: any) => {
                virtual.context =  context
            }
        }

        root[symbol] = virtual;

        resolve(root)
    })
}
