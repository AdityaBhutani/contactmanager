import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact manager" />
      <div className="container">
        <Contact name="John Doe" email="joe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Aditya Bhutani"
          email="github.com/AdityaBhutani"
          phone="9999000099"
        />
      </div>
    </div>
  );
}

export default App;
