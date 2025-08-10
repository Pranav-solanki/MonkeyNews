import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route key="general" path="/" element={<News category="science" />} />
        <Route
          key="sports"
          path="/sports"
          element={<News category="sports" />}
        />
        <Route
          key="business"
          path="/business"
          element={<News category="business" />}
        />
        <Route
          key="technology"
          path="/technology"
          element={<News category="technology" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
