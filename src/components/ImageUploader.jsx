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

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (validateFile(selectedFile)) {
      setLoading(true);
      setFile(selectedFile);
      onUpload(selectedFile);
      setLoading(false);
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
      //TODO: align ImageUpload with design
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="image-uploader"
      style={{
        border: dragOver ? "solid black" : "dashed gray",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
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
            <div className="medium-text">
              Drag & drop a file or{" "}
              <span style={{ color: "#007bff", textDecoration: "underline" }}>
                browse files
              </span>
            </div>
            <div
              className="small-text"
              style={{ marginTop: "10px", color: "gray" }}
            >
              JPG, PNG or GIF - Max file size 2MB
            </div>
          </label>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
