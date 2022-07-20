import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <div className = "profile">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>Hello 👋</p>
            <p>My name is:</p>
            <h1>Oscar Su</h1>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
