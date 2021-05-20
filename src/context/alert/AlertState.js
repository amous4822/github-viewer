import { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../Types";

const AlertState = (props) => {
  const initialState = {
    msg: "",
    alertType: "",
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const sendAlert = (msg, alertType) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        alertType,
      },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        msg: state.msg,
        alertType: state.alertType,
        sendAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
