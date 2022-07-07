// import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./presentation/components/organisms/header";
import CreateSkill from "./presentation/pages/create-skill";
import JobList from "./presentation/pages/job-list";
import CreateJob from "./presentation/pages/create-job";
import Favorite from "./presentation/pages/favorite";
import SignUp from "./presentation/pages/SignUp";
import useAuth from "./presentation/hooks/useAuth";

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
    { path: "/signUp", element: <SignUp /> },
  ]);

  useAuth();

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
