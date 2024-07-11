import "../App.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <p className="loader-text">Uploading, please wait...</p>
      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
    </div>
  );
};

export default Loader;
