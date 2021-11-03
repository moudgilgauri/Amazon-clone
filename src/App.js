// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Full from './components/Full';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
          <Cart/>
          </Route>
          <Route exact path="/fullProduct">
          <Full/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
