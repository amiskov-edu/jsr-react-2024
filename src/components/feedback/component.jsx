import { useReducer } from "react";
import { Rating } from "../rating/component.jsx";

function reducer(state, { type, payload }) {
  switch (type) {
    case "name":
      return { ...state, name: payload };
      break;
    case "text":
      return { ...state, text: payload };
      break;
    case "rating":
      return { ...state, rating: payload };
      break;
    default:
      return state;
  }
}

const initForm = {
  name: "",
  text: "",
  rating: null,
};

export const Feedback = () => {
  const [state, dispatch] = useReducer(reducer, initForm);

  return (
    <form action="#" onSubmit={() => console.log(state)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={(ev) =>
            dispatch({ type: "name", payload: ev.target.value })
          }
          type="text"
          value={state.name}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          onChange={(ev) =>
            dispatch({ type: "text", payload: ev.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          maxRating={5}
          onChange={(rating) => dispatch({ type: "rating", payload: rating })}
          currentValue={state.rating}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
