import {TableBody} from "@mui/material";
import PropTypes from "prop-types";

function DefaultTableBody({children, ...props}) {
  return (
    <TableBody {...props}>
      {children}
    </TableBody>
  );
}

DefaultTableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTableBody;
