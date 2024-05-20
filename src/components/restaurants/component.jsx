import {Restaurant} from '../restaurant/component.jsx'

export const Restaurants = ({restaurants}) => {
    return <>
        {restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
    </>
}
