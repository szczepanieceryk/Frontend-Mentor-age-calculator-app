const DataDisplay = ({ day, month, year }) => {
  const date = new Date();

  const defaultValue = "--";
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const userDay = day;
  const userMonth = month;
  const userYear = year;

  let daysToDisplay;
  let monthToDisplay;
  let yearToDisplay;

  if (currentMonth - userMonth < 0) {
    monthToDisplay = 12 + (currentMonth - userMonth);
    yearToDisplay = currentYear - userYear - 1;
  } else {
    monthToDisplay = currentMonth - userMonth;
    yearToDisplay = currentYear - userYear;
  }
  daysToDisplay = currentDay - userDay;

  return (
    <div className="data-dsiplay-wrapper">
      <span className="single-line block">
        <span className="disaplyed-value">
          {yearToDisplay >= 0 ? yearToDisplay : defaultValue}
        </span>

        <span className="time"> {yearToDisplay === 1 ? "year" : "years"}</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">
          {monthToDisplay >= 0 ? monthToDisplay : defaultValue}
        </span>
        <span className="time">
          {monthToDisplay === 1 ? "month" : "months"}
        </span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">
          {daysToDisplay >= 0 ? daysToDisplay : defaultValue}
        </span>
        <span className="time">{daysToDisplay === 1 ? "day" : "days"}</span>
      </span>
    </div>
  );
};

export default DataDisplay;
