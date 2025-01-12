import {TableRow} from "@mui/material";
import PropTypes from "prop-types";

function DefaultTableRow({children, ...props}) {
  return (
    <TableRow {...props}>
      {children}
    </TableRow>
  );
}

DefaultTableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTableRow;
