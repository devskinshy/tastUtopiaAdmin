import {TableRow} from "@mui/material";

function DefaultTableRow({children, ...props}) {
  return (
    <TableRow {...props}>
      {children}
    </TableRow>
  );
}

export default DefaultTableRow;
