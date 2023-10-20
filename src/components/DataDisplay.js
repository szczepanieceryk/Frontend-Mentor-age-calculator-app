const DataDisplay = () => {
  return (
    <div className="data-dsiplay-wrapper">
      <span className="single-line block">
        <span className="disaplyed-value">--</span>

        <span className="time"> years</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">--</span>
        <span className="time"> months</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">--</span>
        <span className="time">days</span>
      </span>
    </div>
  );
};

export default DataDisplay;
