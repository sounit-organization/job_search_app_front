import { Container } from "@mui/material";
import { Chart, registerables } from "chart.js";
import { useParams } from "react-router-dom";
import BackButton from "../components/organisms/BackButton";
import LoadingPage from "../components/organisms/LoadingPage";
import SkillStaticsBarGraph from "../components/organisms/SkillStaticsBarGraph";
import { useGetStatisticsBySkillIdQuery } from "../hooks/useStatisticsQuery";

Chart.register(...registerables);

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
    <Container>
      <SkillStaticsBarGraph statistics={statistics} />
      <div className="flex justify-center mt-5">
        <BackButton />
      </div>
    </Container>
  );
};

export default Statistics;
