import { useReducer } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { Rating } from "../rating/component";

function reducer(state, { type, payload }) {
  switch (type) {
    case "reset":
      return { ...initForm };
    case "text":
      return { ...state, text: payload };
    case "rating":
      return { ...state, rating: payload };
    default:
      return state;
  }
}
const initForm = {
  name: "",
  text: "",
  rating: null,
};

export const ReviewForm = ({ author, restaurantId }) => {
  const [state, dispatch] = useReducer(reducer, initForm);
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const onFormSubmit = (ev) => {
    ev.preventDefault();
    createReview({
      restaurantId,
      newReview: {
        ...state,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
    dispatch({ type: "reset" });
  };
  return (
    <form action="#" onSubmit={onFormSubmit} className="user-form">
      <div>
        <label>Author: {author.name}</label>
      </div>
      <div>
        <label>Review Text:</label>
        <br />
        <textarea
          disabled={isLoading}
          value={state.text}
          onChange={(ev) =>
            dispatch({ type: "text", payload: ev.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          maxRating={5}
          isDisabled={isLoading}
          onChange={(rating) => dispatch({ type: "rating", payload: rating })}
          currentValue={state.rating}
        />
      </div>
      <div>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
        <button onClick={() => dispatch({ type: "reset" })} type="reset">
          Clear
        </button>
        {isLoading && <mark>Processing...</mark>}
      </div>
    </form>
  );
};
