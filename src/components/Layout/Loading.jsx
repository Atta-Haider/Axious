import "./Loading.css"
export const Loading = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-dot dot-1"></div>
          <div className="loader-dot dot-2"></div>
          <div className="loader-dot dot-3"></div>
        </div>
      </div>
    </>
  );
};
