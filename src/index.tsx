import React from 'react';
import ReactDOM from 'react-dom/client';
import 'shared/fonts/Amiko-Regular.ttf';
import 'shared/fonts/ALSGorizont-Medium.otf';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>,
);
