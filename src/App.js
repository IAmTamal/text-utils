// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [modes, setModes] = useState("light"); //wether dm is enabled or not

  const toggleMode = () => {
    if (modes === "light") {
      setModes("dark");
      document.body.style.backgroundColor = "#525252";
    } else {
      setModes("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={modes} toggle={toggleMode} />

        {/* <About /> */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm mode={modes} toggle={toggleMode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
