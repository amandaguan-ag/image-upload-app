import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImagePreview from "./components/ImagePreview";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
      <header
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
          aria-label={
            darkTheme ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <div style={buttonStyle}>
            <img
              src={darkTheme ? "/Sun_fill.svg" : "/Moon_fill.svg"}
              alt={darkTheme ? "Sun Icon" : "Moon Icon"}
            />
          </div>
        </button>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 70px)",
          flexDirection: "column",
        }}
      >
        {!loading && (
          <section className="outer-container">
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "12px",
                backgroundColor: darkTheme ? "#30363f" : "#fff",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2%",
              }}
            >
              {!loading && !imageUrl && (
                <ImageUploader onUpload={handleUpload} darkTheme={darkTheme} />
              )}
              {imageUrl && !loading && <ImagePreview imageUrl={imageUrl} />}
            </div>
          </section>
        )}
        {loading && <Loader />}
        {imageUrl && !loading && (
          <section className="button-container">
            <button onClick={handleCopy} className="custom-button">
              <img src="/Link.svg" alt="Link Icon" className="button-icon" />
              Share
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = imageUrl;
                link.download = "downloaded_image";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="custom-button"
            >
              <img
                src="/download.svg"
                alt="Download Icon"
                className="button-icon"
              />
              Download
            </button>
          </section>
        )}
        {showToast && (
          <div className="toast" role="alert">
            Address copied to clipboard!
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
