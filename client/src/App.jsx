import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import Navber from "./components/Navber";
import Coures from "./pages/Coures";
import Cart from "./pages/Cart";
import Plan from "./pages/Plan";
import Login from "./pages/Login";
import Singin from "./pages/Singin";

const Layout = () => (
  <>
    <Navber />
    <Outlet />
    <Footer />
  </>
);

const Home = () => (
  <>
    <Hero />
    <Coures />
    {/* <Cart /> */}
    {/* <Plan /> */}
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/courese",
          element: <Coures />
        },
        {
          path: "/addItems",
          element: <Cart />
        },
        // {
        //   path: "/plans",
        //   element: <Plan />
        // },
        {
          path: "/abouts",
          element: <Footer />
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Singin/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
