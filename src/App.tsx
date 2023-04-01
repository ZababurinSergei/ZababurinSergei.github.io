import React, {StrictMode} from 'react';
import style from './index.module.css'
import MainRouting from './_this/MainRouting';
const Panel = () => <h2>I'm a Panel</h2>
export const App = () => {
    return (
        <div className={style.test}>
            <h1>Hello, Welcome Book!</h1>
            <Panel
                className={test.data2}
            />
            <Panel />
        </div>
    )
}
export default App