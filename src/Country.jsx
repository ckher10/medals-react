import { useState } from "react";
import "./Country.css";

function Country({ country: { id, name, gold }, removeCountry }) {

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Gold Medals: {gold}</p>
          <button onClick={() => removeCountry(id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Country;
