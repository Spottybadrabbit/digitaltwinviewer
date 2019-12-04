import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import MapViewer from './MapViewer';
import NavLeft from './components/navLeft/index.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont.js';
import stroe from './store';



window.disableMenue = () => {
    window.event.returnValue = false;
    return false;
}

ReactDOM.render(
    <Provider store={stroe}>
        <GlobalStyle />
        <Iconfont />
        <MapViewer />
        <NavLeft />
    </Provider>,
    document.getElementById('root')
);