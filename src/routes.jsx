import App from "./App.jsx";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import CoursesPage from "./pages/CoursesPage/CoursesPage.jsx";
import CourseDetails from "./pages/CourseDetails/CourseDetails.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import About from "./pages/About/About.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Courses",
        element: <CoursesPage />,
      },
      {
        path: "Courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
];

export default routes;
