import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {restaurants} from './constants/restaurants.js'

import {App} from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
    <App restaurants={restaurants} />
);
