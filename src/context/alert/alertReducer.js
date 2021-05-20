import { SET_ALERT, REMOVE_ALERT } from "../Types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        alertType: action.payload.alertType,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        msg: "",
        alertType: "",
      };
    default:
      return state;
  }
};

export default alertReducer;
