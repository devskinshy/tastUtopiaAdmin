import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



export default function usersListError({status} , {error}) {
return(
    <Box
        sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    }}
    >
     <CircularProgress />
    </Box>
    );
}