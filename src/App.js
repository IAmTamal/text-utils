// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  const [modes, setModes] = useState("light"); //wether dm is enabled or not

  const toggleMode = () => {
    if (modes === "light") {
      setModes("dark");
      document.body.style.backgroundColor = "#606060";
    } else {
      setModes("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <div className="dark-mode">
        <Navbar title="Text-Utils" mode={modes} toggle={toggleMode} />
        <TextForm mode={modes} toggle={toggleMode} />
      </div>
    </>
  );
}

export default App;
