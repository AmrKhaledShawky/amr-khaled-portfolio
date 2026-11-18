import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CV from "./pages/CV.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Research from "./pages/Research.jsx";
import ResearchDetail from "./pages/ResearchDetail.jsx";
import WriteupDetail from "./pages/WriteupDetail.jsx";
import Writeups from "./pages/Writeups.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { siteBase } from "./utils/paths.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={siteBase}>
      <ScrollToTop />

      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route path="/writeups/:slug" element={<WriteupDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
