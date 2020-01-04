import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import todolist from './reducers';

const store = createStore(todolist);

const render = () => ReactDOM.render(<App todolist = { store.getState() }
    onAdd={(value) => store.dispatch({ type: 'ADD' ,value: value})}
    onDelete={(value) => store.dispatch({ type: 'DELETE' ,value: value})}
/>, document.getElementById('root'));

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
