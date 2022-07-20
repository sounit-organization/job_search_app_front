import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { IJob } from "../../domain/Job";
import JobDetailCard from "../components/organisms/JobDetailCard";
import LoadingPage from "../components/organisms/LoadingPage";
import { useGetJobByIdQuery } from "../hooks/useJobsQuery";

const JobDetail = () => {
  const params = useParams();
  const { jobId } = params;
  const navigate = useNavigate();

  const getJobByIdQuery = useGetJobByIdQuery(jobId);

  if (getJobByIdQuery.isLoading) {
    return <LoadingPage />;
  }

  const goBackToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <JobDetailCard job={getJobByIdQuery.data as IJob} />
      <div className="grid justify-center">
        <Button onClick={goBackToPrevPageHandler}>Go Back To Job List</Button>
      </div>
    </div>
  );
};

export default JobDetail;
