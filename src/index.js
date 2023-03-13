import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/roboto";
import "@fontsource/playfair-display"
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

