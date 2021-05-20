import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../Types";

// used to define all the actions performed on the state using the types dispatched from original state 

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
