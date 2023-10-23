const DataDisplay = ({ day, month, year }) => {
  const date = new Date();

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
      <div className="spacer-line"></div>
      <span className="single-line block">
        <span className="disaplyed-value">
          {yearToDisplay ? yearToDisplay : "--"}
        </span>

        <span className="time"> years</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">
          {monthToDisplay ? monthToDisplay : "--"}
        </span>
        <span className="time"> months</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">
          {daysToDisplay ? daysToDisplay : "--"}
        </span>
        <span className="time">days</span>
      </span>
    </div>
  );
};

export default DataDisplay;
