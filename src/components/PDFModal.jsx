import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PDFModal = ({ isOpen, onRequestClose, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="PDF Viewer"
      className="w-[90%] max-w-4xl mx-auto mt-10 bg-white p-4 rounded shadow-lg relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start"
    >
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="600px"
        className="rounded"
      ></iframe>
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        ✕
      </button>
    </Modal>
  );
};

export default PDFModal;
