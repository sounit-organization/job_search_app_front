import { useQuery } from "react-query";
import { getSkills } from "../../services/skillHttpClient.adapter";

const useGetSkills = () => {
  const { data, isLoading, isError, error } = useQuery("skills", getSkills);

  return { data, isLoading, isError, error };
};

export default useGetSkills;
