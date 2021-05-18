import React, { useState } from "react";

const Search = ({ searchUsers, sendAlert, showClear, clearSearch }) => {
  const [user, setUser] = useState("");

  const onSubmit = (e) => {
    
    e.preventDefault();
    const search = e.target.name.value;
    if (search) {
      searchUsers(search);
      e.target.name.value = "";
      setUser("")
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
