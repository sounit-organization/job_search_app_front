import { useParams } from "react-router-dom";
import BackButton from "../components/organisms/BackButton";
import LoadingPage from "../components/organisms/LoadingPage";
import { useGetStatisticsBySkillIdQuery } from "../hooks/useStatisticsQuery";

const Statistics = () => {
  const { skillId } = useParams();
  const getStatisticsBySkillIdQuery = useGetStatisticsBySkillIdQuery(skillId);

  if (getStatisticsBySkillIdQuery.isLoading) {
    return <LoadingPage />;
  }

  const statistics = getStatisticsBySkillIdQuery.data;

  if (!statistics) {
    return <p>No Statistics Data Found</p>;
  }

  return (
    <div>
      Statistics {skillId}
      <div className="flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Statistics;
