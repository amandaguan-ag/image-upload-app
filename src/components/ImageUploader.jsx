import { useState } from "react";

const ImageUploader = ({ onUpload }) => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return <div>{/* Uploader content will go here */}</div>;
};

export default ImageUploader;
