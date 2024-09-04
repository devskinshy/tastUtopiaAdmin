import {
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreTable from "./StoreTable";

export default function StoreContainer() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://3.35.212.57:8080/store/stores")
      .then((response) => {
        const result = response.data;
        setRows(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Store Error:: ", error.message);
        setRows(null);
        setError(true);
      });
  }, []);

  const handleClose = () => {
    setError(false);
    navigate("/", { replace: true });
  };

  if (!rows) {
    return (
      <Dialog
        open={error}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"예기치 못한 에러가 발생했습니다."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    );
  }
  if (loading) {
    return (
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

  return <StoreTable rows={rows} />;
}
