import './App.css';
import React, { useState, useEffect } from 'react';
import { DropdownList } from "./components/DropdownList";    

function App() {
  useEffect(() => {
    document.title = "Oscar"
  }, [])
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <div className = "profile">
            <p>Hello 👋</p>
            <p>My name is:</p>
            <h1>Oscar Su</h1>
            <DropdownList/>  
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
