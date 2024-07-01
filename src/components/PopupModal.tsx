"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "./ui/button";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
    backgroundColor: "#ffffff", // Ensure the modal has a white background
    color: "#000000", // Ensure the text is black for readability
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for better visibility
  },
};

const SubscribePopup: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="z-50">
      <Button onClick={openModal} className="btn btn-primary">
        Open Subscribe Popup
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Subscribe Modal"
      >
        <Button
          className="text-purple-950 flex justify-end"
          onClick={closeModal}
        >
          X
        </Button>
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and offers directly in your inbox.</p>
        <Button className="btn btn-primary" onClick={closeModal}>
          SUBSCRIBE
        </Button>
      </Modal>
    </div>
  );
};

export default SubscribePopup;
