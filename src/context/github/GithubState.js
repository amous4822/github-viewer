import { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../Types";

const GithubState = (props) => {
  //setting the initial state of all the variables
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  let githubClientId;
  let githubSecret;

  if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_CLIENT_ID;
    githubSecret = process.env.REACT_APP_CLIENT_SECRET;
  } else {
    githubClientId = process.env.CLIENT_ID;
    githubSecret = process.env.CLIENT_SECRET;
  }

  //attaching the reducer to initialstate and dispatch actions
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //functions to define how the state will change and what will be dispatched to change the state
  const searchUsers = async (user) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getUser = async (username) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const getUserRepos = async (username) => {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_USERS });
  };

  return (
    //allows values to subscribe to context changes so that if the value prop changes then all stats will re-render
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearSearch,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
