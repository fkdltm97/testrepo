import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Front/Main";
import Header from "./Front/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
