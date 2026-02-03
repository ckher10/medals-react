import Medal from "./Medal";
import "./Country.css";

function Country({
  country: { id, name, gold, silver, bronze },
  removeCountry,
  increaseMedal,
  decreaseMedal,
}) {

  const countryTotalMedals = gold+silver+bronze

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3>Total Medals: {countryTotalMedals}</h3>
          <header>
            <h5>{name}</h5>
            <button onClick={() => removeCountry(id)}>Delete</button>
          </header>
          <Medal
            category="gold"
            count={gold}
            countryId={id}
            increaseMedal={increaseMedal}
            decreaseMedal={decreaseMedal}
          ></Medal>
          <Medal
            category="silver"
            count={silver}
            countryId={id}
            increaseMedal={increaseMedal}
            decreaseMedal={decreaseMedal}
          ></Medal>
          <Medal
            category="bronze"
            count={bronze}
            countryId={id}
            increaseMedal={increaseMedal}
            decreaseMedal={decreaseMedal}
          ></Medal>
        </div>
      </div>
    </>
  );
}

export default Country;
