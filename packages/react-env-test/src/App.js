import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>NODE_ENV: {process.env.NODE_ENV}</p>
        <p>REACT_APP_Api: {process.env.REACT_APP_Api}</p>
      </header>
    </div>
  );
}

export default App;
