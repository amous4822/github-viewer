import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./user/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import UserData from "./user/UserData";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  /**
   * to add routes wrap entire thing in Browserrouter put all the path
   * you want in switch case, assign all the routes you want in it using
   * route tag of 'react-router-dom'. If you want redirect from some other
   * component then use the link tag. see definition navbar component for
   * one example
   */

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={UserData} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
