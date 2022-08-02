import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import classes from "./Modal.module.css";

function ModalCustom(props) {
  const { isShow, handleClose, message } = props;

  return (
    <Modal show={isShow} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Status</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-danger">{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;
