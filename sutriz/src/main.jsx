import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FZFerror from "./components/FZFerror/FZFerror.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Signup from "./components/Usage/autherisation/Signup/Signup.jsx";
import Home from "./components/landingPage/navMaintainer/Home/Home.jsx";
import Usage from "./components/Usage/Usage.jsx";
import Landing from "./components/landingPage/Landing.jsx";
import WorkingSection from "./components/Usage/WorkingPlace/WorkingSection.jsx";
import { ProfileProvider } from "./Context.jsx";
import MainView from "./components/Usage/WorkingPlace/MainView/MainView.jsx";
import Math from "./components/Usage/WorkingPlace/Math/Math.jsx";
import Physics from "./components/Usage/WorkingPlace/Physics/Physics.jsx";
import Chemistry from "./components/Usage/WorkingPlace/Chemistry/Chemistry.jsx";
import MathChapter from "./components/Usage/WorkingPlace/Math/MathChapter/MathChapter.jsx";
import MathIndex from "./components/Usage/WorkingPlace/Math/MathIndex/MathIndex.jsx";
import PhysicsChapter from "./components/Usage/WorkingPlace/Physics/PhysicsChapter/PhysicsChapter.jsx";
import PhysicsIndex from "./components/Usage/WorkingPlace/Physics/PhysicsIndex/PhysicsIndex.jsx";
import ChemistryChapter from "./components/Usage/WorkingPlace/Chemistry/ChemistryChapter/ChemistryChapter.jsx";
import ChemistryIndex from "./components/Usage/WorkingPlace/Chemistry/ChemistryIndex/ChemistryIndex.jsx";
import { MenuContextProvider } from "./Context.jsx";

const token = localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: token ? <Navigate to="/usage/workingsection" /> : <Landing />,
        children: [
          { path: "/", element: <Home /> }, //{path:"Aboutus",element:<Aboutus/>}
        ],
      },
      {
        path: "Usage",
        element: <Usage />,
        children: [
          {
            path: "Signup",
            element: token ? (
              <Navigate to="/usage/workingsection" />
            ) : (
              <Signup />
            ),
          },
          {
            path: "WorkingSection",
            element: <WorkingSection />,
            children: [
              { path: "", element: <MainView /> },
              {
                path: "Math",
                element: <Math />,
                children: [
                  { path: ":mathChapter", element: <MathChapter /> },
                  { path: "", element: <MathIndex /> },
                ],
              },
              {
                path: "Physics",
                element: <Physics />,
                children: [
                  { path: ":physicsChapter", element: <PhysicsChapter /> },
                  { path: "", element: <PhysicsIndex /> },
                ],
              },
              {
                path: "Chemistry",
                element: <Chemistry />,
                children: [
                  { path: ":chemistryChapter", element: <ChemistryChapter /> },
                  { path: "", element: <ChemistryIndex /> },
                ],
              },
            ],
          },
          //{path:"Login",element:<Login/>}
        ],
      },
    ],
  },
  {
    path: "*",
    element: <FZFerror />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuContextProvider>
    <ProfileProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProfileProvider>
  </MenuContextProvider>
);
