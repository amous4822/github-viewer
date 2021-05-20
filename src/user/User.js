import React, { useContext } from "react";
import { Spinner } from "../components/Spinner";
import GithubContext from "../context/github/githubContext";
import UserItem from "./UserItem";

const User = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default User;
