import logo from './logo.svg';
import './App.css';
import { Valendina } from './Valendina/Valendina';

function App() {
  return (
    <div className="App">
    <Valendina/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          PD pt2
        </a>
      </header>
    </div>
  );
}

export default App;
