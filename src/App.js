import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Summer";
  let variable = "";
  if (name === "Summer") {
    variable = <p>This is Summer.</p>
  }
  let nameString = name === "Autumn" ? "This is Autumn!" : "This is not Autumn!";
  const buttonClick = () => {
    console.log("I clicked the button.")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {variable}
        <p>Hi, my name is {name}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>Click me.</button>
      </header>
    </div>
  );
}

export default App;
