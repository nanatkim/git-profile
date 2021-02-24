import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repo from "./pages/Repo";
import Header from "./components/Header";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Home />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
