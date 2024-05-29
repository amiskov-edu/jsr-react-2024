export const RestaurantTabs = ({ restaurants, active, onChange }) => {
    return <div className="tabs">
        {restaurants.map(({ name }, idx) => (
            <button
                disabled={idx === active}
                className={idx === active ? "active" : ""}
                onClick={() => onChange(idx)}>
                {name}
            </button>
        ))}
    </div>
}
