import logo from './logo.svg';
import './App.css';
import { Valendina } from './Valendina/Valendina';

function App() {
  const pippo = 'ha funzionatoooooo';
  const boh = ()=>{
    console.log('ciao')
  }
  const evviva = 'sto commit funziona';
  return (
    <div className="App">
    <Valendina/>
      <header className="App-header">
      <p>{pippo}</p>
      </header>
    </div>
  );
}

export default App;
