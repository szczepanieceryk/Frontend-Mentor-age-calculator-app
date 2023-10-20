const AgeInput = () => {
  return (
    <div className="inputs-wrapper">
      <div className="single-input">
        <label className="label-el" htmlFor="day-input-id">
          Day
        </label>
        <input
          className="input-el"
          type="number"
          id="day-input-id"
          placeholder="DD"
        />
      </div>

      <div className="single-input">
        <label className="label-el" htmlFor="month-input-id">
          Month
        </label>
        <input
          className="input-el"
          type="number"
          id="month-input-id"
          placeholder="MM"
        />
      </div>
      <div className="single-input">
        <label className="label-el" htmlFor="year-input-id">
          Year
        </label>
        <input
          className="input-el"
          type="number"
          id="year-input-id"
          placeholder="YYYY"
        />
      </div>
    </div>
  );
};

export default AgeInput;
