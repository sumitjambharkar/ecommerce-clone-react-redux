import React from "react";
import Navbar from "./Navbar";
import {Switch,Route,} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Users from "./User";
import Header from "./Header";
import Checkout from "./Checkout";


function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/> 
          <Route path="/users" component={Users} exact/> 
          <Route path="/checkout" component={Checkout} exact/> 
        </Switch>
    </> 
  );
}

export default App;