import { useState, useCallback } from "react";
import ChangeNumberPopUp from "./ChangeNumberPopUp";
import PortalPopup from "./PortalPopup";
import styles from "./ContactNumber.module.css";

const ContactNumber = ({phone_number, onChange }) => {
  const [isChangeNumberPopUpOpen, setChangeNumberPopUpOpen] = useState(false);
  const [newContactNumber, setNewContactNumber] = useState("");

  const openChangeNumberPopUp = useCallback(() => {
    setChangeNumberPopUpOpen(true);
  }, []);

  const closeChangeNumberPopUp = useCallback(() => {
    setChangeNumberPopUpOpen(false);
  }, []);

  const handleNewContactNumberChange = useCallback((e) => {
    setNewContactNumber(e.target.value);
  }, []);

  const handleSaveButtonClick = useCallback(() => {
    if (newContactNumber) {
      onChange(newContactNumber);
      closeChangeNumberPopUp();
    }
  }, [newContactNumber, onChange, closeChangeNumberPopUp]);

  return (
    <>
      <div className={styles.phone_number}>
        <div className={styles.phone_number1}>Contact number</div>
        <div className={styles.div}>{phone_number}</div>
        <button
          className={styles.changeContactNumber}
          onClick={openChangeNumberPopUp}
        >
          Change contact number
        </button>
      </div>
      {isChangeNumberPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeNumberPopUp}
        >
          <ChangeNumberPopUp
            newContactNumber={newContactNumber}
            onNewContactNumberChange={handleNewContactNumberChange}
            onSaveButtonClick={handleSaveButtonClick}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default ContactNumber;