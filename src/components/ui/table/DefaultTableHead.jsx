import {TableHead} from "@mui/material";
import PropTypes from "prop-types";

function DefaultTableHead({children, ...props}) {
  return (
    <TableHead {...props}>
      {children}
    </TableHead>
  );
}

DefaultTableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTableHead;
