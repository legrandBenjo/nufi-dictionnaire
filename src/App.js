import CalendrierPersonnes from './CalendrierPersonnes';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React 
        </a>
      </header> */}
       <h1 className="app-title">Ŋwɑ̀'nǐsáhlíé' 2023</h1> {/* ajouter une classe CSS */}
      <CalendrierPersonnes />
    </div>
  );
}

export default App;