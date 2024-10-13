import {Paper, TableContainer} from "@mui/material";

function DefaultTableContainer({isLoading, isError, children, ...props}) {
  if (isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <TableContainer component={Paper} {...props}>
      {children}
    </TableContainer>
  );
}

export default DefaultTableContainer;
