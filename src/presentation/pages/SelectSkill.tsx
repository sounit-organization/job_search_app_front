import { Container } from "@mui/material";
import LoadingPage from "../components/organisms/LoadingPage";
import SkillCardList from "../components/organisms/SkillCardList";
import StaticsButtonSkillCard from "../components/organisms/StaticsButtonSkillCard";
import { useGetSkillsQuery } from "../hooks/useSkillsQuery";

const SelectSkill = () => {
  const getSkillsQuery = useGetSkillsQuery();

  if (getSkillsQuery.isLoading) {
    return <LoadingPage />;
  }

  const skillList = getSkillsQuery.data;

  return (
    <Container className="md:max-w-4xl mb-10">
      <SkillCardList>
        {skillList?.map((skill) => (
          <StaticsButtonSkillCard key={skill._id} skill={skill} />
        ))}
      </SkillCardList>
    </Container>
  );
};

export default SelectSkill;
