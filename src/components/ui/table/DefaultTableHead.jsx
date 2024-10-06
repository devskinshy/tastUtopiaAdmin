import {TableHead} from "@mui/material";

function DefaultTableHead({children, ...props}) {
  return (
    <TableHead {...props}>
      {children}
    </TableHead>
  );
}

export default DefaultTableHead;
