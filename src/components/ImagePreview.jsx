// src/components/ImagePreview.js
import React from "react";
import "../App.css";

const ImagePreview = ({ imageUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl);
    alert("Image URL copied to clipboard");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="image-preview-container">
      <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
    </div>
  );
};

export default ImagePreview;
