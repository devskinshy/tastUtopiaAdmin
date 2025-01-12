import {TableCell} from "@mui/material";
import PropTypes from "prop-types";

function DefaultTableCell({children, ...props}) {
  return (
    <TableCell {...props}>
      {children}
    </TableCell>
  );
}

DefaultTableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTableCell;
