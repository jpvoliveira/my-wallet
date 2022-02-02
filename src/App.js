import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Index.js";
import Register from "./components/Register/Index.js";
import Home from "./components/Home/Index.js";
import Input from "./components/Input/Index.js";
import Output from "./components/Output/Index.js";
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
            <Route path="/menu" element={<Home />}></Route>
            <Route path="/entrada" element={<Input />}></Route>
            <Route path="/saida" element={<Output />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}
