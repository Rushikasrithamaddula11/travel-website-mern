import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/BookingPage.js";
import Destinations from "./components/Destinations.js";
import LoginSignup from "./components/LoginSignup.js";
import ProfilePage from "./components/ProfilePage.js";



import "./App.css";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/bookingpage" component={BookingPage} />
		  <Route path="/destinations" component={Destinations} />
		  <Route path="/loginsignup" component={LoginSignup} />
		  <Route path="/profilepage" component={ProfilePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
