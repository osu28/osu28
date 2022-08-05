import './App.css';
import React, { useState, useEffect } from 'react';
// import { DropdownList } from "./components/DropdownList";
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList } from "@progress/kendo-react-dropdowns";   
import { Education } from "./components/Education"; 
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  useEffect(() => {
    document.title = "Oscar"
  }, [])
  const [value, setValue] = useState("Education");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const sizes = [" Experience", " Projects", " Contact"];
  var content;
  if (value === "Education") {
    content = <Education />
  } else if (value === " Experience") {
    content = <Experience />
  } else if (value === " Projects") {
    content = <Projects />
  } else if (value === " Contact") {
    content = <Contact />
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <div className = "profile">
            <p>Hello 👋</p>
            <p>My name is:</p>
            <h1>Oscar Su</h1>
            <DropDownList
              style={{
                width: "300px",
              }}
              data={sizes}
              defaultItem="Education"
              value={value}
              onChange={handleChange}
            /> 
            {content}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
