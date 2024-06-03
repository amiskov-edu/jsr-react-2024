import './style.css'

export const Rating = ({onChange, currentValue, maxRating}) => {
    return <div className="rating">
        {[...Array(maxRating)].map((_, index) => {
            const value = index + 1;
            return <button disabled={currentValue === value}
                           onClick={() => onChange(value)}
                           type="button">
                {value}
            </button>
        })}
    </div>
}
