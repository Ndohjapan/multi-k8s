import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Fib from  './Fib';
import otherPage from './otherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 className="App-title"> Fib Calculator Kubernetes --- 4!</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div>
          <Route exact  path="/" component={Fib} />
          <Route path="/otherpage" component={otherPage} />
        </div>

      </div>
    </Router>
  );
}

export default App;
