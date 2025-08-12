import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setprogress] = useState(10);
  return (
    <Router basename="/MonkeyNews">
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={progress}
          onLoaderFinished={() => setprogress(0)} // auto-reset
      />
      <Routes>
        <Route key="general" path="/" element={<News progress={setprogress} category="science" />} />
        <Route
          key="sports"
          path="/sports"
          element={<News progress={setprogress} category="sports" />}
        />
        <Route
          key="business"
          path="/business"
          element={<News progress={setprogress} category="business" />}
        />
        <Route
          key="technology"
          path="/technology"
          element={<News progress={setprogress} category="technology" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
