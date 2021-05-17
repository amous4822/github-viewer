import React, { Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import User from "./user/User";
import { Search } from "./user/Search";
import Alert from "./user/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import UserData from "./user/UserData";

class App extends React.Component {
  state = {
    users: [],
    user: [],
    repos: [],
    loading: false,
    msg: "",
    alertType: "",
  };

  searchUsers = async (user) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    
    this.setState({ repos: res.data, loading: false });
  };

  clearSearch = () => {
    this.setState({ users: [] });
  };

  sendAlert = (msg, alertType) => {
    // console.log(msg, type);
    this.setState({
      msg,
      alertType,
    });

    setTimeout(() => {
      this.setState({ msg: null, alertType: null });
    }, 3000);
  };

  /**
   * to add routes wrap entire thing in Browserrouter put all the path
   * you want in switch case, assign all the routes you want in it using
   * route tag of 'react-router-dom'. If you want redirect from some other
   * component then use the link tag. see definition navbar component for
   * one example
   */

  render() {
    const { users, user, repos, loading, msg, alertType } = this.state;

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
                      searchUsers={this.searchUsers}
                      clearSearch={this.clearSearch}
                      showClear={users.length > 0}
                      sendAlert={this.sendAlert}
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
                    getUser={this.getUser}
                    userData={user}
                    userDataRepos={this.getUserRepos}
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
}

export default App;
