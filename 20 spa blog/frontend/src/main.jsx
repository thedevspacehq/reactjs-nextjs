import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Import React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import New from "./routes/posts/new";
import Show from "./routes/posts/show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/posts/:id",
    element: <Show />,
  },
  {
    path: "/posts/new",
    element: <New />,
  },
  {
    path: "/posts/update/:id",
    element: <New />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
