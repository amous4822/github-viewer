import React from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import User from "./layout/User";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
