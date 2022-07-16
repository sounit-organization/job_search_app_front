import { Pagination as MuiPagination } from "@mui/material";
import { FC } from "react";

type Props = {
  count: number;
  onChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  className?: string;
  page?: number;
};

const Pagination: FC<Props> = (props) => {
  const { count, onChange, className, page } = props;

  return (
    <div className={className}>
      <MuiPagination
        page={page}
        color="primary"
        count={count}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
