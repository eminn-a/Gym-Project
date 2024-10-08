import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouterLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage";
import CommentsPage from "./pages/CommentsPage.jsx";

import Classes from "./components/Classes/Classes.jsx";
import About from "./components/About/About.jsx";
import PriceTable from "./components/PriceTable/PriceTable.jsx";
import Page404 from "./components/404/404Page.jsx";

import { programsData } from "./data/programsData";
import { coaches } from "./data/coaches";
import { priceData } from "./data/priceData";
import AdminGuard from "./guards/AdminGuard.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        {
          element: <AdminGuard />,
          children: [
            {
              path: "comments",
              element: <CommentsPage />,
            },
            {
              element: <AdminGuard />,
              children: [
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
          ],
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
