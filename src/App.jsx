import {Header} from './components/header/component.jsx'
import {Footer} from './components/footer/component.jsx'
import {Restaurants} from './components/restaurants/component.jsx'

export const App = ({restaurants}) => <div>
    <Header/>
    <hr/>
    <Restaurants restaurants={restaurants}/>
    <hr/>
    <Footer/>
</div>
