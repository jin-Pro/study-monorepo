import React, { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Flex } from "ui/Flex";

const MainPage = React.lazy(() => import("./Main"));
const SecondPage = React.lazy(() => import("./Second"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Flex
        width="100vw"
        height="100vh"
        items="center"
        backgroundColor="black"
        justify="center"
      >
        <Outlet />
      </Flex>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/second",
        element: (
          <Suspense fallback={<div>1</div>}>
            <SecondPage />
          </Suspense>
        ),
      },
    ],
  },
]);
