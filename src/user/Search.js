import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import GithubContext from "../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { sendAlert } = alertContext;
  const { clearSearch, searchUsers, users } = githubContext;

  const onSubmit = (e) => {
    e.preventDefault();
    const search = e.target.name.value;
    if (search) {
      searchUsers(search);
      e.target.name.value = "";
    } else {
      sendAlert(" Please enter a valid username", "Danger");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Search users ..." />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
