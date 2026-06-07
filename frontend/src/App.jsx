import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CropDetail from "./pages/CropDetail.jsx";
import VanajAIChat from "./components/VanajAIChat.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop/:slug" element={<CropDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <VanajAIChat />
    </div>
  );
}
