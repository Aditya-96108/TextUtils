import React from 'react';

function Alert({ alert }) {
  // Function to capitalize the first letter of the message
  const capitalizeFirstLetter = (msg) => {
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  };

  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirstLetter(alert.msg)}</strong>
      </div>
    )
  );
}

export default Alert;
