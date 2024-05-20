
import {Header} from './components/header/component.jsx'
import {Footer} from './components/footer/component.jsx'
import {Restaurants} from './components/restaurants/component.jsx'
// import {Tabs} from './components/tabs/component.jsx'

export const App = ({restaurants}) => {
    return <div>
        <Header/>
        <hr/>
        <Restaurants restaurants={restaurants}/>
        <hr/>
        <Footer/>
    </div>
}
