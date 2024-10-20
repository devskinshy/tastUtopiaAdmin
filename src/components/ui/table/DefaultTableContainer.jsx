import {Paper, TableContainer} from "@mui/material";
import {PureComponent} from "react";

function DefaultTableContainer({isLoading, isError, table, ...props}) {
  if (isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  console.log({table, Paper})

  return (
    <TableContainer component={Paper} {...props}>
      {table()}
    </TableContainer>
  );
}

export default DefaultTableContainer;
