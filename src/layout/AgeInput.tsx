import React from "react";
import { useState } from "react";
import arrowIcon from "../images/icon-arrow.svg";

const AgeInput = ({ setDate }) => {
  type StringInput = string;

  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");

  const [isValidDay, setIsValidDay] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const date = new Date();
  const currentYear: number = date.getFullYear();

  const validateDay = (value: StringInput) => {
    const num = Number(value);
    return num > 0 && num <= 31;
  };

  const validateMonth = (value: StringInput) => {
    const num = Number(value);
    return num > 0 && num <= 12;
  };

  const validateYear = (value: StringInput) => {
    const num = Number(value);
    return num > 0 && num <= currentYear;
  };

  const handleChange = (event: { target: { id: string; value: string } }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidDay = validateDay(day);
    const isValidMonth = validateMonth(month);
    const isValidYear = validateYear(year);

    setIsValidDay(isValidDay);
    setIsValidMonth(isValidMonth);
    setIsValidYear(isValidYear);

    if (isValidDay && isValidMonth && isValidYear) {
      setDate({ day, month, year });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs-wrapper">
        <div className="single-input">
          <label
            className={isValidDay ? "label-el block" : "label-el error"}
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
            <small className="error-msg error">Must be a valid date</small>
          )}
        </div>

        <div className="single-input">
          <label
            className={isValidMonth ? "label-el block" : "label-el error"}
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
            <small className="error-msg block error">
              Must be a valid date
            </small>
          )}
        </div>

        <div className="single-input">
          <label
            className={isValidYear ? "label-el block" : "label-el error"}
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
            <small className="error-msg block error">
              Must be a valid date
            </small>
          )}
        </div>
      </div>
      <div className="spacer-line">
        <button className="btn-submit" type="submit">
          <img src={arrowIcon} alt="submit icon" className="btn-submit-icon" />
        </button>
      </div>
    </form>
  );
};

export default AgeInput;
