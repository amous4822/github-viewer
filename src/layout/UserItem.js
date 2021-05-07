import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="text-center card">
      <img
        className="round-img"
        alt="user pic"
        src={avatar_url}
        style={{ width: "60px" }}
      />
      <div>
        <a
          className="btn btn-dark btn-sm my-1"
          rel="noreferrer noopener"
          href={html_url}
          target="_blank"
        >
          {login}
        </a>
      </div>
    </div>
  );
};

export default UserItem;
