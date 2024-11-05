import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1>Добро пожаловать!</h1>
      <Link to="/about" style={{ color: "#000" }}>
        О нас
      </Link>
    </div>
  );
};

export default Main;
