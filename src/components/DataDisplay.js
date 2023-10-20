const DataDisplay = () => {
  return (
    <div className="data-dsiplay-wrapper">
      <span className="single-line block">
        <span className="disaplyed-value">--</span>

        <span className="years">years</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">--</span>
        <span className="years">months</span>
      </span>
      <span className="single-line block">
        <span className="disaplyed-value">--</span>
        <span className="years">days</span>
      </span>
    </div>
  );
};

export default DataDisplay;
