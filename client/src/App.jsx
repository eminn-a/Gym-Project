import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./pages/RootLayout.jsx";
import Testemonials from "./components/Testemonials/Testemonial.jsx";

import { testemonials } from "./data/testemonials.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "comments",
          element: <Testemonials testemonials={testemonials} />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
