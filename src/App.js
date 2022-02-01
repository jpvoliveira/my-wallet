import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Index.js";
import Register from "./components/Register/Index.js";
import Home from "./components/Home/Index.js";
import Input from "./components/Input/Index.js";
import Output from "./components/Output/Index.js";
import Statement from "./components/Statement/Index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/conta" element={<Home />}></Route>
        <Route path="/entrada" element={<Input />}></Route>
        <Route path="/saida" element={<Output />}></Route>
        <Route path="/extrato" element={<Statement />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
