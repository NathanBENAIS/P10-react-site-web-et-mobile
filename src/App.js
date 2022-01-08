import React from "react";
import GlobalSlyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    <Router>
      <GlobalSlyle />
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
      <Footer/>
    </Router>


  );
}

export default App;
