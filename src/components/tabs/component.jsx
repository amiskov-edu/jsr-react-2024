export const Tabs = ({restaurants}) => {
    return (
        <div>
            {restaurants.map((r, idx) => {
                return <button
                    onClick={() => setActiveRestaurant(idx)}>
                    {r.name}
                </button>
            })}
        </div>
    )
}
