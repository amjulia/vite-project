import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { MenuProvider } from "./MenuContext";
import About from "./components/About";

function App() {
  return (
    <MenuProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MenuProvider>
  );
}

export default App;

