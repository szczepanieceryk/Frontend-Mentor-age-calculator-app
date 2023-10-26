import { useState } from "react";
import "./App.css";
import AgeInput from "./components/AgeInput";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  const [date, setDate] = useState({
    day: "--",
    month: "--",
    year: "--",
  });

  return (
    <div className="container">
      <div className="app-wrapper">
        <AgeInput setDate={setDate} />
        <DataDisplay day={date.day} month={date.month} year={date.year} />
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a className="link" href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="link" href="https://github.com/szczepanieceryk">
          Eryk Szczepaniec{" "}
        </a>
        .
      </div>
    </div>
  );
};

export default App;
