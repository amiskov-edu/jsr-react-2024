import {Menu} from '../menu/component.jsx'
import {Review} from '../review/component.jsx'
import './style.css'

export const Restaurant = ({restaurant}) => {
    return <div className="restaurant">
        <h2>{restaurant.name}</h2>

        <h3>Menu</h3>
        <Menu menu={restaurant.menu}/>

        <h3>Reviews</h3>
        {restaurant.reviews.map(r => <Review review={r}/>)}
    </div>
}
