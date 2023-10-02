import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/articlesPage/ArticlesPage";
import SingleArticlePage from "./pages/articlesPage/SingleArticlePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import LessonsPage from "./pages/LessonsPage";

function App() {
  const isLoggined = useSelector((state) => state.authentication.isLoggined);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggined ? <HomePage /> : <AuthenticationPage />} />
        <Route path="articles/:category" element={<ArticlesPage />} />
        <Route path="articles/:category/:id" element={<SingleArticlePage />} />
        <Route path="/:courses/:lessons" element={<LessonsPage />} />
        <Route path="/:courses/:homeworks" element={<LessonsPage />} />
      </Routes>
    </div>
  );
}

export default App;
