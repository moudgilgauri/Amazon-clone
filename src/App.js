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
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
          <Header />
            <Home />
          </Route>
          <Route exact path="/cart">
          <Header />
          <Cart/>
          </Route>
          <Route exact path="/fullProduct">
          <Header />
          <Full/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
