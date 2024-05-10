import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category/Category";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TermsAndCond from "../pages/Shared/TermsAndCond/TermsAndCond";
import Profile from "../pages/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://dragon-news-server-rouge-six.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-rouge-six.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-rouge-six.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCond></TermsAndCond>
            },
        ]
    }
])