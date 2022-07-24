import { Container } from "@mui/material";
import LoadingPage from "../components/organisms/LoadingPage";
import SkillCard from "../components/organisms/SkillCard";
import { useGetSkillsQuery } from "../hooks/useSkillsQuery";

const SelectSkill = () => {
  const getSkillsQuery = useGetSkillsQuery();

  if (getSkillsQuery.isLoading) {
    return <LoadingPage />;
  }

  const skillList = getSkillsQuery.data;

  return (
    <Container className="md:max-w-4xl mb-10">
      {skillList?.map((skill) => (
        <SkillCard key={skill._id} skill={skill} />
      ))}
    </Container>
  );
};

export default SelectSkill;
