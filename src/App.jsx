import { useState } from "react";
import ImageUploader from "./components/ImageUploader";

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

  return (
    <div className={darkTheme ? "dark" : "light"}>
      {/* TODO: implement dark-light effect*/}
      {/* TODO: reference header size */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* TODO: reference typographies*/}
        <div>ImageUpload</div>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* TODO: reference real icon */}
          {darkTheme ? "🌙" : "☀️"}
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
