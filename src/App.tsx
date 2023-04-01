import React, {StrictMode} from 'react';
import style from './index.module.css'
import { Panel } from './Panel'
import MainRouting from './_this/MainRouting';
export const Context = React.createContext({});

export const App = ({ actionContext }) => {
    return (
        <Context.Provider value={actionContext}>
            <div className={style.root}>
                <slot name={'dialog'}></slot>
                <Panel/>
            </div>
        </Context.Provider>
    )
}
export default App