import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App