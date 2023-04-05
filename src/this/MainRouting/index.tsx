import React, {Suspense, lazy, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../modules';
import { idKey } from '@src/utilites/idKey'
import Main from '../../modules/Main/index'
import Info from '../../modules/Info/index'
import Admin from '../../modules/Admin/index'

const description = {
    Admin: () => <Admin></Admin>,
    Info: () => <Info></Info>,
    Main: () => <Main></Main>
}

const Elements = routes.map((route) => {
    const { module, path, Body } = route;


    // todo понадобится для parcel
    // const LazyComponent = lazy(() => import(`../../modules/${module}/index.js`));

    if(module) {
        const RenderFn = () => {
            return (
                <Body
                    className={'test'}
                >
                    <Suspense fallback={<p>Loading...</p>}>
                        {description[module]()}
                        {/* <LazyComponent
                            ismobileleftmenu={ismobileleftmenu}
                            setmobileleftmenu={setmobileleftmenu}
                        /> */}
                    </Suspense>
                </Body>
            );
        };
        return <Route key={idKey()} path={path} element={<RenderFn />} />
    }
})


export const MainRouting = () => {
    const dispatch = useDispatch()

    dispatch(
        globalActions.initial({
            version: 'v1.0.15',
            device: isMobile
        })
    )

    return (
        <BrowserRouter>
            <Routes>
                { Elements }
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouting;
