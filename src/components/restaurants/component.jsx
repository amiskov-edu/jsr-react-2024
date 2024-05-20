import {useState} from 'react';
import {Restaurant} from '../restaurant/component.jsx';
import './style.css';

export const Restaurants = ({restaurants}) => {
    const [active, setActiveRestaurant] = useState(0);

    if (restaurants.length === 0) {
        return <div>Restaurants not found.</div>
    }

    return <>
        <div className='tabs'>
            {restaurants.map((r, idx) =>
                <button
                    className={(idx === active) ? 'active' : ''}
                    onClick={() => setActiveRestaurant(idx)}>
                    {r.name}
                </button>
            )}
        </div>

        {restaurants.map((restaurant, idx) => {
            if (idx === active) {
                return <Restaurant restaurant={restaurant}/>
            }
        })}
    </>
}
