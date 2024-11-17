import {TableBody} from "@mui/material";

function DefaultTableBody({children, ...props}) {
  return (
    <TableBody {...props}>
      {children}
    </TableBody>
  );
}

export default DefaultTableBody;
