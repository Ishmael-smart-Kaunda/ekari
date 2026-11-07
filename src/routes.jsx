import {createBrowserRouter} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home.jsx"
import Contact from "./pages/contact.jsx"
import Blog from "./pages/blog.jsx"

const Router = createBrowserRouter([
                  {
                       path: '/',
                       Component: Layout,
                         children: [
                              {index: true, Component: Home},
                              {path: '/contact', Component: Contact }
                        ]
                  },
])

export default Router