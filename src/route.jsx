// routes.js
import { Navigate } from "react-router-dom";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./features/authentication/Unauthorized";

import AppLayout from "./ui/layout/AppLayout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import GradeContents from "./pages/GradeContents";
import Subjects from "./pages/Subjects";
import SuceessPage from "./pages/SuceessPage";
import VerficationCode from "./pages/VerficationCode";
import Register from "./pages/Register";
import Lessons from "./pages/lessons/Lessons";
import InteractiveQuestions from "./pages/lessons/InteractiveQuestions";
import Videos from "./pages/lessons/Videos";
import PastExams from "./pages/lessons/PastExams";
import Summaries from "./pages/lessons/Summaries";

const protectedRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="home" /> },
      { path: "home", element: <Home /> },

      { path: "grade/:grade", element: <GradeContents /> },

      { path: "/subjects", element: <Subjects /> },
      { path: "/subjects/videos/:id", element: <Videos /> },
      { path: "/subjects/lessons/:id", element: <Lessons /> },
      { path: "/subjects/past-exams/:id", element: <PastExams /> },
      { path: "/subjects/summaries/:id", element: <Summaries /> },
      {
        path: "/subjects/interactive-questions/:id",
        element: <InteractiveQuestions />,
      },

      { path: "success", element: <SuceessPage /> },

      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },
];

const publicRoutes = [
  { path: "auth/login", element: <Login /> },
  { path: "auth", element: <Auth /> },
  { path: "auth/verfication", element: <VerficationCode /> },
  { path: "auth/register", element: <Register /> },
  { path: "*", element: <PageNotFound /> },
];

export { protectedRoutes, publicRoutes };
