import React, { useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import User from "./user/User";
import Search from "./user/Search";
import Alert from "./user/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import UserData from "./user/UserData";

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const [alertType, setAlertType] = useState("")


  const searchUsers = async (user) => {

    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setLoading(false)
    setUsers(res.data.items)
  };

  const getUser = async (username) => {
    
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    
    setUser(res.data)
    setLoading(false)
  };

  const getUserRepos = async (username) => {
    
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setRepos(res.data)
    setLoading(false)
  };

  const clearSearch = () => {
    setUsers([])
  };

  const sendAlert = (msg, alertType) => {

    setMsg(msg)
    setAlertType(alertType)

    setTimeout(() => {
      setMsg(null)
    setAlertType(null)
    }, 2000);
  };

  /**
   * to add routes wrap entire thing in Browserrouter put all the path
   * you want in switch case, assign all the routes you want in it using
   * route tag of 'react-router-dom'. If you want redirect from some other
   * component then use the link tag. see definition navbar component for
   * one example
   */


    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert msg={msg} type={alertType} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearSearch={clearSearch}
                      showClear={users.length > 0}
                      sendAlert={sendAlert}
                    />
                    <User loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <UserData
                    {...props}
                    getUser={getUser}
                    userData={user}
                    userDataRepos={getUserRepos}
                    userRepos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
