import * as React from "react";
import style from './index.module.css'
const Panel = () => <h2>I'm a Panel</h2>
export const App = () => {
    return (
        <div className={style.test}>
            <h1>Hello, Welcome Book!</h1>
            <Panel />
            <Panel />
        </div>
    )
}

export default App