import { Dish } from "../dish/component.jsx";

export const Menu = ({ dishIds, onRefreshClick }) => {
  return (
    <div>
      <h3>Menu</h3>
      <button onClick={onRefreshClick}>Refresh</button>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
