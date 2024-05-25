import {Review} from '../review/component.jsx'

export const Reviews = ({reviews}) => {
    return <div>
        <h3>Reviews</h3>
        {
            (reviews.length === 0)
                ? <div>No reviews.</div>
                : <ul>{reviews.map(review => <li><Review review={review}/></li>)}</ul>
        }
    </div>
}
