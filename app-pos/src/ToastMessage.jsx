import React from "react";
import Toast from "react-bootstrap/Toast";

function ToastMessage({ toastTitle, onClose }) {
  return (
    <Toast onClose={onClose} delay={1000} autohide animation>
      <Toast.Header>
        <strong className="mr-auto">{toastTitle}</strong>
      </Toast.Header>
      <Toast.Body>Your item has been added to the cart.</Toast.Body>
    </Toast>
  );
}

export default ToastMessage;
