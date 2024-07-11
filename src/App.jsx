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
        display: "flex",
      }
    : {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        padding: "8px",
        display: "flex",
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
          <div style={buttonStyle}>
            <img
              src={darkTheme ? "/Sun_fill.svg" : "/Moon_fill.svg"}
              alt={darkTheme ? "Sun Icon" : "Moon Icon"}
            />
          </div>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 70px)",
        }}
        >
        <div
          style={{
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          <ImageUploader onUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
};

export default App;
