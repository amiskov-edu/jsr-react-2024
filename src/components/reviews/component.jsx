import { Review } from "../review/component.jsx";

export const Reviews = ({ reviewIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map(id => (<li><Review id={id} /></li>))}
      </ul>
    </div>
  );
};
