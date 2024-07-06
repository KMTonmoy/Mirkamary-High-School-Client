import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/ContactPage/Contact";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import TeacherDetails from "../Components/TeacherDetails/TeacherDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/teacher/:id',
                element: <TeacherDetails />,
                loader: ({ params }) => fetch(`http://localhost:8000/teacher/${params.id}`)
            },
            {
                path: '*',
                element: <Error />,
            },
        ]
    },
    {

        path: '*',
        element: <Error />,

    }
]);