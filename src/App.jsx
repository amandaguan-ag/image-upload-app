import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import "./App.css";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const buttonStyle = darkTheme
    ? {
        backgroundColor: "#4D5562",
        border: "1px solid #F9FAFBCC",
        borderRadius: "8px",
        padding: "8px",
      }
    : {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        padding: "8px",
      };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: "transparent",
            cursor: "pointer",
            border: "none",
          }}
        >
          <img
            style={buttonStyle}
            src={darkTheme ? "/Sun_fill.svg" : "/Moon_fill.svg"}
            alt={darkTheme ? "Sun Icon" : "Moon Icon"}
          />
        </button>
      </div>
      <div>
        <ImageUploader onUpload={handleUpload} />
        {/* TODO: ImagePreview component will go here */}
      </div>
    </div>
  );
};

export default App;
