import { useCallback } from "react";
import { useState } from "react"; 
import "./ResudialBalancePopUp.css";

const ResudialBalancePopUp = ({ onClose }) => {
  const [date_str, setDate] = useState(""); 
  const [total_budget_increase, setResudialExercise] = useState(""); 
  const [name, setRecipeDesignation] = useState(""); 

  const onResudialExerciseButtonClick = useCallback(async () => {

    const data = {
      date_str,
      total_budget_increase,
      name,
    };
    console.log(data);

    try {
      const response = await fetch("http://127.0.0.1:8000/increase-total-budget/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('sus');
      } else {
        console.log('eror1');
      }
    } catch (error) {
      console.log('eror2');

    }
  }, [date_str, total_budget_increase, name]);

  return (
    <div className="resudialbalancepopup">
      <div className="card-bodyblur-effects">
        <div className="resudial-balance-details">
          <div className="date-details">
            <div className="dateresu">Date</div>
            <input
              className="date-input"
              type="date"
              placeholder="0"
              value={date_str} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <img className="date-icon" alt="" src="/dateicon.svg" />
          <div className="resudial-exercise-details">
            <div className="dateresu">Resudial exercise</div>
            <input
              className="resudial-exercise-input"
              type="text"
              placeholder="entre balance amount"
              value={total_budget_increase} 
              onChange={(e) => setResudialExercise(e.target.value)}
            />
          </div>
          <div className="recipe-designation">
            <div className="dateresu">Recipe Designation</div>
            <input
              className="recipe-designation-input"
              type="text"
              placeholder="entre recipe designation"
              value={name} 
              onChange={(e) => setRecipeDesignation(e.target.value)} 
            />
          </div>
          <img className="dollar-icon" alt="" src="/dollaricon.svg" />
        </div>
        <button
          className="resudial-exercise-button"
          onClick={onResudialExerciseButtonClick}
        >
          <img className="plusicon" alt="" src="/plusicon2.svg" />
          <div className="resudial-exercise1">RESUDIAL EXERCISE</div>
        </button>
        <button className="exit-button" onClick={onClose}>
          <img className="x-icon" alt="" src="/x.svg" />
        </button>
      </div>
    </div>
  );
};

export default ResudialBalancePopUp;
