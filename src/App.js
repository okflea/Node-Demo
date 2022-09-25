import {BrowserRouter, Routes, Route } from "react-router-dom"

// Component 
import Home from "./Components/Home";
import User from "./Components/User";

// Common 
import TopBar from "./Common/TopBar/TopBar"
function App() {
  return (
    <BrowserRouter path="/">
      <TopBar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<User />} path="/user"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
