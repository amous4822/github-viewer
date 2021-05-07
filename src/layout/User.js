import React, { Component } from "react";
import UserItem from "./UserItem";

export default class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};