import { useState } from "react";
import "./styles/App.css";
import AgeInput from "./layout/AgeInput";
import DataDisplay from "./layout/DataDisplay.tsx";
import Footer from "./layout/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
