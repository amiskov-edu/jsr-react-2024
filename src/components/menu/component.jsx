import { Dish } from "../dish/component.jsx";

export const Menu = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
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
