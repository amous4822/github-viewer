import { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = (props) => {

  const alertState = useContext(AlertContext)
  const {msg, alertType} = alertState 
  
  return (
    <div>
      {msg ? (
        <div className={`alert alert-${alertType}`}>
            <i className="fas fa-info-circle"/>
            {msg}</div>
      ) : null}
    </div>
  );
};

export default Alert;
