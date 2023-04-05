import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import mapReducer from '../reducers';
import sagas from '../sagas';
import { Main } from './Main';
import { Coding } from './Coding';
import { Decoding } from './Decoding';
export const MapModule = {
    id: 'main',
    reducerMap: {
        icd: mapReducer
    },
    sagas
};
export const Components = () => {
    return (
        <DynamicModuleLoader key="main" modules={[MapModule]}>
            <Routes>
                <Route path={`/coding/*`} element={<Coding/>} />
                <Route path={`/decoding/*`} element={<Decoding />} />
                <Route path={`/*`} element={<Main/>} />
            </Routes>
        </DynamicModuleLoader>)
}

export default Components;
