import {TableCell} from "@mui/material";

function DefaultTableCell({children, ...props}) {
  return (
    <TableCell {...props}>
      {children}
    </TableCell>
  );
}

export default DefaultTableCell;
