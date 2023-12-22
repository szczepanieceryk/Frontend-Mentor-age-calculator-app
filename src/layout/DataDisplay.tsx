import React from "react";
type InitialData = {
  day: string;
  month: string;
  year: string;
};
const DataDisplay = ({ day, month, year }: InitialData) => {
  const date = new Date();

  const defaultValue = "--";
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const userDayInput = parseInt(day, 10);
  const userMonthInput = parseInt(month, 10);
  const userYearInput = parseInt(year, 10);

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  const yearToDisplay =
    currentYear -
    userYearInput -
    (currentMonth < userMonthInput ||
    (currentMonth === userMonthInput && currentDay < userDayInput)
      ? 1
      : 0);

  const monthToDisplay = (currentMonth - userMonthInput + 12) % 12;

  const daysToDisplay =
    currentDay >= userDayInput
      ? currentDay - userDayInput
      : currentDay + daysInMonth(userYearInput, userMonthInput) - userDayInput;

  return (
    <div className="data-display-wrapper">
      <span className="single-line block">
        <span className="displayed-value">
          {yearToDisplay >= 0 ? yearToDisplay : defaultValue}
        </span>

        <span className="time"> {yearToDisplay === 1 ? "year" : "years"}</span>
      </span>
      <span className="single-line block">
        <span className="displayed-value">
          {monthToDisplay >= 0 ? monthToDisplay : defaultValue}
        </span>
        <span className="time">
          {monthToDisplay === 1 ? "month" : "months"}
        </span>
      </span>
      <span className="single-line block">
        <span className="displayed-value">
          {daysToDisplay >= 0 ? daysToDisplay : defaultValue}
        </span>
        <span className="time">{daysToDisplay === 1 ? "day" : "days"}</span>
      </span>
    </div>
  );
};

export default DataDisplay;
