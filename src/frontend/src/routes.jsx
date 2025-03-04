import { Home, Profile, Project} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "projects",
    path: "/project",
    element: <Project />,
  },
];

export default routes;
