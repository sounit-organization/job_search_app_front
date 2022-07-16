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
    { path: "/jobs/search", element: <SearchJobs /> },
    { path: "/jobs/new", element: <CreateJob /> },
    { path: "/skills/new", element: <CreateSkill /> },
    { path: "/skills/:skillId/edit", element: <EditSkill /> },
    { path: "/favorite", element: <Favorite /> },
    { path: "/signUp", element: <SignUp /> },
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
