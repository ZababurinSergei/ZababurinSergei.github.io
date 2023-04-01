import React, { useContext, useState } from 'react';
import style from './index.module.css'
import { Context } from '@src/App'
export const Panel = () => {
    const root = useContext(Context);
    const [name, setName] = useState(false)

    if(!name) {
        root.test(setName)
    }

    return (
        <div
            className={style.panel}
        >
            { name }
        </div>
    )}
export default {
    description: 'component Panel'
}