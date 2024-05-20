import {Restaurant} from '../restaurant/component.jsx'

export const Restaurants = ({restaurants}) => {
    if (restaurants.length === 0) {
        return <div>Restaurants not found.</div>
    }

    return <>
        {restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
    </>
}
