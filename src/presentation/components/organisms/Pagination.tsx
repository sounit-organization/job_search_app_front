import { Pagination as MuiPagination } from "@mui/material";
import { FC } from "react";

type Props = {
  count: number;
  onChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  className?: string;
};

const Pagination: FC<Props> = (props) => {
  const { count, onChange, className } = props;
  return (
    <div className={className}>
      <MuiPagination color="primary" count={count} onChange={onChange} />
    </div>
  );
};

export default Pagination;
