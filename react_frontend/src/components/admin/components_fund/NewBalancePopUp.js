import { useCallback, useState } from "react";
import "./NewBalancePopUp.css";

const NewBalancePopUp = ({ onClose }) => {
  const [date_str, setDate] = useState("");
  const [total_budget_increase, setBalanceAmount] = useState("");
  const [name, setRecipeDesignation] = useState("");

  const onAddBalanceButtonClick = useCallback(async () => {
    try {
      const data = {
        date_str,
        total_budget_increase,
        name,
      };
console.log(data);
      const response = await fetch("http://127.0.0.1:8000/increase-total-budget/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Balance added successfully!");
        onClose(); 
      } else {
        console.error("Failed to add balance.");
      }
    } catch (error) {
      console.error("Error adding balance:", error);
    }
  }, [date_str, total_budget_increase, name, onClose]);

  return (
    <div className="newbalancepopup">
      <div className="card-bodyblur-effects1">
        <div className="new-balance-details">
          <div className="date-details1">
            <div className="new-balance">Date</div>
            <input
              className="date-input1"
              type="date"
              placeholder="0"
              value={date_str}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <img className="date-icon1" alt="" src="/dateicon.svg" />
          <div className="new-balance-amount-details">
            <div className="new-balance">New balance</div>
            <input
              className="new-balance-input"
              type="text"
              placeholder="Enter balance amount"
              value={total_budget_increase}
              onChange={(e) => setBalanceAmount(e.target.value)}
            />
          </div>
          <div className="recipe-designation-details">
            <div className="new-balance">Recipe Designation</div>
            <input
              className="recipe-designation-input1"
              type="text"
              placeholder="Enter recipe designation"
              value={name}
              onChange={(e) => setRecipeDesignation(e.target.value)}
            />
          </div>
          <img className="dollar-icon1" alt="" src="/dollaricon1.svg" />
        </div>
        <button
          className="add-balance-button"
          onClick={onAddBalanceButtonClick}
        >
          <img className="plusicon1" alt="" src="/plusicon1.svg" />
          <div className="add-balance">ADD BALANCE</div>
        </button>
        <button className="exit-button1" onClick={onClose}>
          <img className="x-icon1" alt="" src="/x.svg" />
        </button>
      </div>
    </div>
  );
};

export default NewBalancePopUp;
