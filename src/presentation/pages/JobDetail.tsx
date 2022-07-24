import { useParams } from "react-router-dom";
import { IJob } from "../../domain/Job";
import BackButton from "../components/organisms/BackButton";
import JobDetailCard from "../components/organisms/JobDetailCard";
import LoadingPage from "../components/organisms/LoadingPage";
import { useGetJobByIdQuery } from "../hooks/useJobsQuery";

const JobDetail = () => {
  const params = useParams();
  const { jobId } = params;

  const getJobByIdQuery = useGetJobByIdQuery(jobId);

  if (getJobByIdQuery.isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <JobDetailCard job={getJobByIdQuery.data as IJob} />
      <div className="grid justify-center">
        <BackButton buttonText="Go Back To Job List" />
      </div>
    </div>
  );
};

export default JobDetail;
