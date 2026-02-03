import "./Medal.css";

function Medal({ category, count, countryId, increaseMedal, decreaseMedal }) {
  return (
    <div className="medal_row">
      <p>
        {category} medals: {count}
      </p>
      <div>
        <button
          onClick={() => decreaseMedal(countryId, category)}
          disabled={!count}
        >
          -
        </button>
        <button onClick={() => increaseMedal(countryId, category)}>+</button>
      </div>
    </div>
  );
}

export default Medal;
