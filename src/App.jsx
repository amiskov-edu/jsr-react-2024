import {Header} from './components/header/component.jsx'
import {Footer} from './components/footer/component.jsx'
import {Restaurants} from './components/restaurants/component.jsx'
import {Feedback} from './components/feedback/component.jsx'

export const App = ({restaurants}) => <div>
    <Header/>
    <hr/>
    <Restaurants restaurants={restaurants}/>
    <hr/>
    <Feedback/>
    <hr/>
    <Footer/>
</div>
