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
import CommentsPage from "./pages/CommentsPage.jsx";
import Page404 from "./components/404/404Page.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "comments",
          element: <CommentsPage />,
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
