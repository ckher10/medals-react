import { useEffect, useState } from "react";
import "./NewCountry.css";
import { createPortal } from "react-dom";

function NewCountry(prop) {
  const [countryName, setCountryName] = useState("");
  const [showModal, setShowModal] = useState(false);

  function showMyModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setCountryName("");
  }

  function addCountryHandler() {
    if (countryName) {
      prop.addCountry(countryName);
      closeModal();
    }
  }

  return (
    <>
      <button className="add-button" onClick={showMyModal}>
        <i class="bi bi-plus-circle"></i>
      </button>

      {showModal ? (
        <>
          <div className="my-modal-overlay" onClick={closeModal}></div>
          <div className="my-modal">
            <header className="modal-header">
              <h2 id="modal-title">New Country</h2>
              <button aria-label="Close modal" onClick={closeModal}>
                ×
              </button>
            </header>
            <div className="modal-body">
              <input
                type="text"
                onChange={(e) => setCountryName(e.target.value)}
                value={countryName}
              />
              <button onClick={addCountryHandler}>Add</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default NewCountry;
