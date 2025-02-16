import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayouts from "./layouts/MainLayouts";
import Politics from "./pages/Politics";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Culture from "./pages/Culture";
import Society from "./pages/Society";
import Sport from "./pages/Sport";
import Tech from "./pages/Tech";
import Tourism from "./pages/Tourism";
import NotFound from "./pages/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/politics",
          element: <Politics />,
        },
        {
          path: "/business",
          element: <Business />,
        },
        {
          path: "/culture",
          element: <Culture />,
        },
        {
          path: "/society",
          element: <Society />,
        },
        {
          path: "/sport",
          element: <Sport />,
        },
        {
          path: "/tech",
          element: <Tech />,
        },
        {
          path: "/tourism",
          element: <Tourism />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
