import { Typography } from "@mui/material";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { Statistics } from "../../../domain/Statistics";

type Props = {
  statistics: Statistics;
};

const SkillStaticsBarGraph: FC<Props> = (props) => {
  const { statistics } = props;
  const { primarySkill, subSkillsMap } = statistics;

  const labelList: string[] = [];
  const relatedSkillCountList: number[] = [];

  Object.keys(subSkillsMap).forEach((key) => {
    const subSkill = subSkillsMap[key];

    labelList.push(subSkill.skill.title);
    relatedSkillCountList.push(subSkill.count);
  });

  return (
    <div>
      <Typography variant="h6" align="center">
        {primarySkill.title}
      </Typography>
      <Bar
        data={{
          labels: labelList,
          datasets: [
            {
              label: "Related Skills",
              data: relatedSkillCountList,
              backgroundColor: "rgb(59 130 246 / 0.5)",
            },
          ],
        }}
      />
    </div>
  );
};

export default SkillStaticsBarGraph;
