import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="text-center card">
      <img
        className="round-img"
        alt="user pic"
        src={avatar_url}
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`}>More</Link>
      </div>
    </div>
  );
};

export default UserItem;
