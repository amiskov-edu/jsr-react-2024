import "./style.css";

export const Rating = ({ onChange, isDisabled, currentValue, maxRating }) => {
  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, index) => {
        const value = index + 1;
        return (
          <button
            disabled={currentValue === value || isDisabled}
            onClick={() => onChange(value)}
            type="button"
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};
