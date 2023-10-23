import { useState } from "react";
import "./App.css";
import AgeInput from "./components/AgeInput";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");

  return (
    <div className="container">
      <div className="app-wrapper">
        <AgeInput
          setDay={setDay}
          day={day}
          setMonth={setMonth}
          month={month}
          setYear={setYear}
          year={year}
        />
        <DataDisplay day={day} month={month} year={year} />
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/szczepanieceryk">Eryk Szczepaniec </a>.
      </div>
    </div>
  );
};

export default App;
