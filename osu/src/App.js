import './App.css';
import React, { useState, useEffect } from 'react';
// import { DropdownList } from "./components/DropdownList";
// import '@progress/kendo-theme-default/dist/all.css';
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { About } from "./components/About"; 
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  useEffect(() => {
    document.title = "Oscar"
  }, [])
  const [pageNum, setCount] = useState(0)
  var content;
  if (pageNum === 0) {
    content = <Intro />
  } else if (pageNum === 1) {
    content = <About />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
              <div className="logo">
                  <img src={require("./assets/oscar_fav.png")} className='fav'></img>
              </div>
              <div className="buttons">
                  <button class="button-27" onClick={() => setCount(0)}>Home</button>
                  <button class="button-27" onClick={() => setCount(1)}>About</button>
                  <button class="button-27" onClick={() => setCount(2)}>Work</button>
                  <button class="button-27" onClick={() => setCount(3)}>Projects</button>
              </div>
          </div>
          <div className="content">
            {content}
          </div>
      </header>
    </div>
  );
}

export default App;
