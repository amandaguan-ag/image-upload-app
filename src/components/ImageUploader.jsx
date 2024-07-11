import { useState } from "react";

const ImageUploader = ({ onUpload }) => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const droppedFile = event.dataTransfer.files[0];
    if (validateFile(droppedFile)) {
      setLoading(true);
      setFile(droppedFile);
      onUpload(droppedFile);
      setLoading(false);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragOver ? "2px solid #000" : "2px dashed #ccc",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{/* File input will go here */}</div>
      )}
    </div>
  );
};

export default ImageUploader;
