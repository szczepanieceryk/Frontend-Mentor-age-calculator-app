import "./App.css";
import AgeInput from "./components/AgeInput";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <AgeInput />
        <DataDisplay />
      </div>
      Challenge by Frontend Mentor. Coded by Your Name Here.
    </div>
  );
};

export default App;
