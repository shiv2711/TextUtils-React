import { useState } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  
  //MODES HENDLING

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };

  // ALERTS

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} setAlert={setAlert} />
      <div className="container">
        <Routes>
          <Route exact
            path="/"
            element={
              <TextForm
              showAlert={showAlert}
              mode={mode}
              heading="TRY TEXTUTILS - WORD COUNTER | CHARACTER COUNTER | REMOVE EXTRA SPACES ..."
              />
            }
          />
          <Route exact path="/About" element={<About mode={mode} />} />
          <Route exact path="/Contact" element={<Contact mode={mode} />} />
        </Routes>
      </div>
      <Footer mode={mode}/>
    </BrowserRouter>
  );
}

export default App;
