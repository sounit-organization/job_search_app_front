import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStatisticsBySkillId } from "../../services/statisticsHttpClient.adapter";
import BackButton from "../components/organisms/BackButton";

const Statistics = () => {
  const { skillId } = useParams();

  const fetch = useCallback(async () => {
    if (skillId) {
      const res = await getStatisticsBySkillId(skillId);
      console.log("statistics res", res);
    }
  }, [skillId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

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
