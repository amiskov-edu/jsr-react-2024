export const RestaurantTabs = ({ restaurants, restaurantIds, active, onChange }) => {
    return <div className="tabs">
        {restaurantIds.map(id => <button
            disabled={id === active}
            onClick={() => onChange(id)}>
            {restaurants[id].name}
        </button>
        )}
    </div>
}
