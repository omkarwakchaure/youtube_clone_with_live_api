import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import MainContainer from "../MainContainer";
import WatchPage from "../innerpages/watchPage/WatchPage";
import SearchResults from "../innerpages/searchPart/SearchResults";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

export default router;