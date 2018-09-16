import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    saveState({
        series: store.getState().series
    });
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
