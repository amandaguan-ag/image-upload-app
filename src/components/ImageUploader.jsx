import { useState } from "react";
import "../App.css";

const ImageUploader = ({ onUpload, darkTheme }) => {
  const [dragOver, setDragOver] = useState(false);

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
      onUpload(droppedFile);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (validateFile(selectedFile)) {
      onUpload(selectedFile);
    }
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file && validTypes.includes(file.type) && file.size <= maxSize) {
      return true;
    }
    alert("Invalid file. Please select a JPG, PNG, or GIF file under 2MB.");
    return false;
  };

  return (
    <div
      // TODO: design dash seem more sparse
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="image-uploader"
      style={{
        border: dragOver ? "solid black" : "dashed #E5E7EB",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        height: "300px",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
        <div style={{ marginBottom: "10px" }}>
          <img src="exit.svg" alt="Upload Icon" />
        </div>
        <div
          className="medium-text"
          style={{ color: darkTheme ? "#E5E7EB" : "#000" }}
        >
          Drag & drop a file or{" "}
          <span style={{ color: "rgba(30,70,147,1)" }}>browse files</span>
        </div>
        <div
          className="small-text"
          style={{
            marginTop: "10px",
            color: darkTheme ? "#F9FAFB" : "#6B7280",
          }}
        >
          JPG, PNG or GIF - Max file size 2MB
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;
