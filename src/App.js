import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function doThing(num) {
    alert(`button #${num} pressed`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Buttons">
          <button className="Database-buttons" onClick={() => doThing(1)}>
            Button 1
          </button>
          <button className="Database-buttons" onClick={() => doThing(2)}>
            Button 2
          </button>
          <button className="Database-buttons" onClick={() => doThing(3)}>
            Button 3
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
