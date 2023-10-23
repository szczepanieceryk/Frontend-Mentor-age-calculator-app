import { useState } from "react";

const AgeInput = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [isValidDay, setIsValidDay] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const date = new Date();
  const currentYear = date.getFullYear();

  const validateDay = (value) => {
    const num = Number(value);
    return num > 0 && num <= 31;
  };

  const validateMonth = (value) => {
    const num = Number(value);
    return num > 0 && num <= 12;
  };

  const validateYear = (value) => {
    const num = Number(value);
    return num > 0 && num <= currentYear;
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    const dayInputId = "day-input-id";
    const monthInputId = "month-input-id";
    const yearInputId = "year-input-id";

    if (id === dayInputId) {
      setDay(value);
      setIsValidDay(validateDay(value));
    } else if (id === monthInputId) {
      setMonth(value);
      setIsValidMonth(validateMonth(value));
    } else if (id === yearInputId) {
      setYear(value);
      setIsValidYear(validateYear(value));
    }
  };

  return (
    <div className="inputs-wrapper">
      <div className="single-input">
        <label
          className={isValidDay ? "label-el" : "label-el error"}
          htmlFor="day-input-id"
        >
          Day
          <input
            className={isValidDay ? "input-el" : "input-el error"}
            type="number"
            id="day-input-id"
            placeholder="DD"
            value={day}
            onChange={handleChange}
          />
        </label>
        {!isValidDay && (
          <small className="error-msg block error">Must be a valid date</small>
        )}
      </div>

      <div className="single-input">
        <label
          className={isValidMonth ? "label-el" : "label-el error"}
          htmlFor="month-input-id"
        >
          Month
          <input
            className={isValidMonth ? "input-el" : "input-el error"}
            type="number"
            id="month-input-id"
            placeholder="MM"
            value={month}
            onChange={handleChange}
          />
        </label>
        {!isValidMonth && (
          <small className="error-msg block error">Must be a valid date</small>
        )}
      </div>

      <div className="single-input">
        <label
          className={isValidYear ? "label-el" : "label-el error"}
          htmlFor="year-input-id"
        >
          Year
          <input
            className={isValidYear ? "input-el" : "input-el error"}
            type="number"
            id="year-input-id"
            placeholder="YYYY"
            value={year}
            onChange={handleChange}
          />
        </label>
        {!isValidYear && (
          <small className="error-msg block error">Must be a valid date</small>
        )}
      </div>
    </div>
  );
};

export default AgeInput;