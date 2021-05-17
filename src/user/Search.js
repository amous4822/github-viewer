import React, { Component } from "react";

export class Search extends Component {
  state = {
    user: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value)
    const search = e.target.name.value;
    if (search) {
      this.props.searchUsers(search);
      e.target.name.value = "";
      this.setState({
        user: "",
      });
    } else {
      this.props.sendAlert(" Please enter a valid username", "Danger");
    }
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="Search users ..." />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearSearch}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
