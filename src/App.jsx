import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./pages/articlesPage/ArticlesPage";
import SingleArticlePage from "./pages/articlesPage/SingleArticlePage";
import SignUpPage from "./pages/authenticationPage/SignUpPage";
import LessonsPage from "./pages/lessonsPage/LessonsPage";
import HomeworksPage from "./pages/homeworksPage/HomeworksPage";
import ProfilePage from "./pages/ProfilePage";
import SingleHomeworkPage from "./pages/homeworksPage/SingleHomeworkPage";
import SingleLessonPage from "./pages/lessonsPage/SingleLessonPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/authenticationPage/SignInPage";

function App() {
  // const isLoggined = useSelector((state) => state.authentication.isLoggined);
  // if (!isLoggined) return <SignUpPage />;
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/sign-in" replace />} /> */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="articles/:category" element={<ArticlesPage />} />
        <Route path="articles/:category/:id" element={<SingleArticlePage />} />
        <Route path="/:courses/:id/lessons" element={<LessonsPage />} />
        <Route path="/:courses/:id/lessons/:lessonId" element={<SingleLessonPage />} />
        <Route path="/:courses/:id/homeworks" element={<HomeworksPage />} />
        <Route path="/:courses/:id/homeworks/:hwId" element={<SingleHomeworkPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
