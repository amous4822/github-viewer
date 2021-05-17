const Alert = (props) => {
  return (
    <div>
      {props.msg ? (
        <div className={`alert alert-${props.alertType}`}>
            <i className="fas fa-info-circle"/>
            {props.msg}</div>
      ) : null}
    </div>
  );
};

export default Alert;
