import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header branding="Contact manager" />
      <Contact name="John Doe" email="joe@gmail.com" phone="555-555-5555" />
      <Contact
        name="Aditya Bhutani"
        email="github.com/AdityaBhutani"
        phone="9999000099"
      />
    </div>
  );
}

export default App;
