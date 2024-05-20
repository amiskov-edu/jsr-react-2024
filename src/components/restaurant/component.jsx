import {Menu} from '../menu/component.jsx'
import {Reviews} from '../reviews/component.jsx'
import './style.css'

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
        return <div>restaurants not found</div>
    }
    const {name, menu, reviews} = restaurant;
    return <div className="restaurant">
        <h2>{name}</h2>
        <Menu menu={menu}/>
        <Reviews reviews={reviews}/>
    </div>
}
