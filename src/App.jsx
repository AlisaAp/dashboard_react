import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/articlesPage/ArticlesPage";
import SingleArticlePage from "./pages/articlesPage/SingleArticlePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import LessonsPage from "./pages/lessonsPage/LessonsPage";
import HomeworksPage from "./pages/homeworksPage/HomeworksPage";
import ProfilePage from "./pages/ProfilePage";
import SingleHomeworkPage from "./pages/homeworksPage/SingleHomeworkPage";
import SingleLessonPage from "./pages/lessonsPage/SingleLessonPage";

function App() {
  const isLoggined = useSelector((state) => state.authentication.isLoggined);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggined ? <HomePage /> : <AuthenticationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="articles/:category" element={<ArticlesPage />} />
        <Route path="articles/:category/:id" element={<SingleArticlePage />} />
        {/* <Route path="/:courses/:id" element={<CoursePage />} /> */}
        <Route path="/:courses/:id/lessons" element={<LessonsPage />} />
        <Route path="/:courses/:id/lessons/:lessonId" element={<SingleLessonPage />} />
        <Route path="/:courses/:id/homeworks" element={<HomeworksPage />} />
        <Route path="/:courses/:id/homeworks/:hwId" element={<SingleHomeworkPage />} />
      </Routes>
    </div>
  );
}

export default App;
