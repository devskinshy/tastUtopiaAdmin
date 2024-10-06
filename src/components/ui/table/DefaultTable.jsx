import {Table} from "@mui/material";

function DefaultTable({children, ...props}) {
  return (
    <Table {...props}>
      {children}
    </Table>
  );
}

export default DefaultTable;
