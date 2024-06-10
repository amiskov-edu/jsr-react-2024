import { useSelector } from 'react-redux'
import { Dish } from '../dish/component.jsx'

export const Menu = ({ menu }) => {
    const dishes = useSelector(state => state.dish.entities)
    return <div>
        <h3>Menu</h3>
        <ul>
            {menu.map(dishId => <li>
                <Dish dish={dishes[dishId]} />
            </li>)}
        </ul>
    </div>
}
