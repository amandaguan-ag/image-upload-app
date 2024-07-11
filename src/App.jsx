import { useState } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

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
    </div>
  );
};

export default App;
