import './App.css';
import React, { useState, useEffect } from 'react';
// import { DropdownList } from "./components/DropdownList";
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList } from "@progress/kendo-react-dropdowns";   
import { Education } from "./components/Education"; 
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";

function App() {
  useEffect(() => {
    document.title = "Oscar"
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <div className="content">
            <Intro />
          </div>
      </header>
    </div>
  );
}

export default App;
