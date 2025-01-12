import {Table} from "@mui/material";
import PropTypes from "prop-types";

function DefaultTable({children, ...props}) {
  return (
    <Table {...props}>
      {children}
    </Table>
  );
}

DefaultTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTable;
