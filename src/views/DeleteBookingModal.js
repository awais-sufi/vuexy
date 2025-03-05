import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import logo from "@src/assets/images/logo/Warn.svg";

import "./font.css";

export default function DeleteBookingModal({ isOpen, onClose }) {
  const handleClose = () => onClose();
  const handleCancel = () => onClose();
  const handleDelete = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={handleClose}
      centered
      contentClassName="custom-modal w-75"
    >
      <ModalBody className="text-end">
        <div className="">
          <Button onClick={handleClose} close></Button>
          <div className="mb-1 text-center">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-dark a fs-4 text-center font-bold">
            Delete Booking?
          </p>
          <p className="text-dark font-bold text-center">
            Are you sure you want to delete
            <br />
            booking <strong>#1120001?</strong>
          </p>
        </div>
      </ModalBody>
      <ModalFooter className="justify-content-center ft-color py-2">
        <Button
          onClick={handleCancel}
          outline
          className="rounded-pill a text-black  px-4"
        >
          Cancel
        </Button>
        <Button
          color="danger"
          onClick={handleDelete}
          className="rounded-pill py-1 px-4"
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
}
