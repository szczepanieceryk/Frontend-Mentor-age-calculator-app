const AgeInput = () => {
  return (
    <div className="inputs-wrapper">
      <div className="single-input">
        <label className="label-el" htmlFor="day-input-id">
          Day
        </label>
        <input className="input-el" type="number" id="day-input-id" />
      </div>

      <div className="single-input">
        <label className="label-el" htmlFor="month-input-id">
          Month
        </label>
        <input className="input-el" type="number" id="month-input-id" />
      </div>
      <div className="single-input">
        <label className="label-el" htmlFor="year-input-id">
          Year
        </label>
        <input className="input-el" type="number" id="year-input-id" />
      </div>
    </div>
  );
};

export default AgeInput;
