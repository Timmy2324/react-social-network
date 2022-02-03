import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ReduxStoreType, Store} from "./redux/redux-store";

export const rerenderEntireTree = (store: ReduxStoreType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={Store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(Store);

Store.subscribe(() => rerenderEntireTree(Store))