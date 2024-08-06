import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Link to AUT Website below.
        </p>
        <a
          className="App-link"
          href="https://www.aut.ac.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AUT WEBSITE LINK
        </a>
      </header>
    </div>
  );
}

export default App;
