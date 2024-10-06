import {Paper, TableContainer} from "@mui/material";
import {API_DATA_STATUS} from "../../../settings/constants.js";

function DefaultTableContainer({status, children, ...props}) {
  if (status === API_DATA_STATUS.init) {
    return <div></div>
  }

  if (status === API_DATA_STATUS.error) {
    return <div>error</div>
  }

  if (status === API_DATA_STATUS.loading) {
    return <div>loading</div>
  }

  return (
    <TableContainer component={Paper} {...props}>
      {children}
    </TableContainer>
  );
}

export default DefaultTableContainer;
