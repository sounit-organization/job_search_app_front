import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SkillCardList: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">{children}</div>
  );
};

export default SkillCardList;
