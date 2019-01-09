import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './reducers/index';


const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
     // Ket noi rereact va redux qua Provider
    <Provider store ={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
