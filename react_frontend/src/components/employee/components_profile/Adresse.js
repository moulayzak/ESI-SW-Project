import { useState, useCallback } from "react";
import ChangeAdressePopUp from "./ChangeAdressePopUp";
import PortalPopup from "./PortalPopup";
import styles from "./Adresse.module.css";

const Adresse = ({ address }) => {
  const [isChangeAdressePopUpOpen, setChangeAdressePopUpOpen] = useState(false);
  const [newAdresse, setNewAdresse] = useState("");

  const openChangeAdressePopUp = useCallback(() => {
    setChangeAdressePopUpOpen(true);
  }, []);

  const closeChangeAdressePopUp = useCallback(() => {
    setChangeAdressePopUpOpen(false);
  }, []);

  const handleNewAdresseChange = useCallback((event) => {
    setNewAdresse(event.target.value);
  }, []);

  const handleSaveButtonClick = useCallback(() => {
    console.log(newAdresse);
    closeChangeAdressePopUp();
  }, [newAdresse, closeChangeAdressePopUp]);

  return (
    <>
      <div className={styles.address}>
        <div className={styles.address1}>address</div>
        <div className={styles.adresseValue}>{address}</div>
        <button
          className={styles.changeAdresse}
          onClick={openChangeAdressePopUp}
        >
          Change adresse
        </button>
      </div>
      {isChangeAdressePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeAdressePopUp}
        >
          <ChangeAdressePopUp
            newAdresse={newAdresse}
            onNewAdresseChange={handleNewAdresseChange}
            onSaveButtonClick={handleSaveButtonClick}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default Adresse;