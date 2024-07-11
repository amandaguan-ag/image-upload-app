import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImagePreview from "./components/ImagePreview";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = (file) => {
    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setTimeout(() => {
        setImageUrl(reader.result);
        setLoading(false);
      }, 3000); 
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
          borderBottom: "1px solid #212936",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo-small.svg"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span className={`medium-text ${darkTheme ? "light-text" : ""}`}>
            ImageUpload
          </span>
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
            backgroundColor: darkTheme ? "#30363f" : "#fff",
          }}
        >
          {!loading && !imageUrl && (
            <ImageUploader onUpload={handleUpload} darkTheme={darkTheme} />
          )}
          {loading && <Loader />}
          {imageUrl && !loading && <ImagePreview imageUrl={imageUrl} />}
        </div>
      </div>
    </div>
  );
};

export default App;
