// import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import CreateSkill from "./presentation/pages/CreateSkill";
import JobList from "./presentation/pages/JobList";
import CreateJob from "./presentation/pages/CreateJob";
import Favorite from "./presentation/pages/Favorite";
import SignUp from "./presentation/pages/SignUp";
import useAuth from "./presentation/hooks/useAuth";
import ErrorModal from "./presentation/components/organisms/ErrorModal";
import { useAppSelector } from "./presentation/hooks/reduxHooks";
import EditSkill from "./presentation/pages/EditSkill";
import Header from "./presentation/components/organisms/Header";
import SearchJobs from "./presentation/pages/SearchJobs";
import Login from "./presentation/pages/Login";
import JobDetail from "./presentation/pages/JobDetail";
import EditJob from "./presentation/pages/EditJob";
import SelectSkill from "./presentation/pages/SelectSkill";
import Statistics from "./presentation/pages/Statistics";

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
    },
    { path: "/jobs/search", element: <SearchJobs /> },
    { path: "/jobs/new", element: <CreateJob /> },
    { path: "/jobs/:jobId/edit", element: <EditJob /> },
    { path: "/jobs/:jobId", element: <JobDetail /> },
    { path: "/statistics/:skillId", element: <Statistics /> },
    { path: "/statistics/", element: <SelectSkill /> },
    { path: "/skills/new", element: <CreateSkill /> },
    { path: "/skills/:skillId/edit", element: <EditSkill /> },
    { path: "/favorite", element: <Favorite /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/login", element: <Login /> },
  ]);
  const { errorMessage } = useAppSelector((state) => state.error);

  useAuth();

  return (
    <>
      <ErrorModal message={errorMessage} isOpen={!!errorMessage} />
      {/* <Suspense fallback={<p>loading....</p>}> */}
      <Header />
      {routes}
      {/* </Suspense> */}
    </>
  );
}

export default App;
