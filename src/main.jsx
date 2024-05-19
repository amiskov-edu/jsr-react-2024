import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {restaurants} from './constants/restaurants.js'

import {Header} from './components/header/component.jsx'
import {Footer} from './components/footer/component.jsx'
import {Restaurant} from './components/restaurant/component.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header/>
        <hr/>
        {restaurants.map(r => <Restaurant restaurant={r}/>)}
        <hr/>
        <Footer/>
    </div>
);
