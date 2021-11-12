import { useEffect } from 'react';
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
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';




function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //listener when everytime a user logins in or logs out
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is",authUser)
      if(authUser){
        //this means user has just logged in or was laready logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
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
