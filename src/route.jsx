// routes.js
import { Navigate } from "react-router-dom";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./features/authentication/Unauthorized";

import AppLayout from "./ui/layout/AppLayout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import StageContents from "./pages/StageGradeContents";
import Subjects from "./pages/Subjects";
import SuceessPage from "./pages/SuceessPage";
import VerficationCode from "./pages/VerficationCode";
import Register from "./pages/Register";
import Lessons from "./pages/lessons/Lessons";
import InteractiveQuestions from "./pages/lessons/InteractiveQuestions";
import Videos from "./pages/lessons/Videos";
import PastExams from "./pages/lessons/PastExams";
import Summaries from "./pages/lessons/Summaries";
import StageGrades from "./pages/StageGrades";

const protectedRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="home" /> },
      { path: "home", element: <Home /> },

      { path: "stage/:stage", element: <StageGrades /> },

      {
        path: "stage/:stage/grade/:grade/",
        element: <Subjects />,
        children: [],
      },

      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId",
        element: <StageContents />,
      },
      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId/videos/",
        element: <Videos />,
      },
      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId/lessons",
        element: <Lessons />,
      },
      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId/past-exams",
        element: <PastExams />,
      },
      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId/summaries",
        element: <Summaries />,
      },
      {
        path: "/stage/:stage/grade/:grade/subject/:subjectId/interactive-questions",
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
