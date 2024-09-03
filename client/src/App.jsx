import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./pages/RootLayout.jsx";
import Testemonials from "./components/Testemonials/Testemonial.jsx";
import Classes from "./components/Classes/Classes.jsx";
import About from "./components/About/About.jsx";
import PriceTable from "./components/PriceTable/PriceTable.jsx";

import { testemonials } from "./data/testemonials.js";
import { programsData } from "./data/programsData";
import { coaches } from "./data/coaches";
import { priceData } from "./data/priceData";
import Mycomments from "./components/MyComments/MyComments.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "comments",
          element: <Mycomments comments={testemonials} />,
        },
        {
          path: "programs",
          element: <Classes programsData={programsData} />,
        },
        {
          path: "programs",
          element: <Classes programsData={programsData} />,
        },
        {
          path: "about",
          element: <About coaches={coaches} />,
        },
        {
          path: "price",
          element: <PriceTable priceData={priceData} />,
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
