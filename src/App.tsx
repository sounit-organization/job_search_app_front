// import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Header from "../src/components/organisms/header";
import CreateSkill from "./pages/create-skill";
import JobList from "./pages/job-list";
import CreateJob from "./pages/create-job";
import Favorite from "./pages/favorite";

// FIXME: no optimization before measure the performance
// const Header = lazy(() => import("../src/components/organisms/header"));
// const CreateSkill = lazy(() => import("./pages/create-skill"));
// const CreateJob = lazy(() => import("./pages/create-job"));
// const JobList = lazy(() => import("./pages/job-list"));
// const Favorite = lazy(() => import("./pages/Favorite"));
// const JobDetail = lazy(() => import("./pages/job-detail"));

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <JobList />,
      // children: [{ path: "/jobs/detail/:jobId", element: <JobDetail /> }],
    },
    { path: "/jobs/new", element: <CreateJob /> },
    { path: "/skills/new", element: <CreateSkill /> },
    { path: "/favorite", element: <Favorite /> },
  ]);
  return (
    <>
      {/* <Suspense fallback={<p>loading....</p>}> */}
      <Header />
      {routes}
      {/* </Suspense> */}
    </>
  );
}

export default App;
