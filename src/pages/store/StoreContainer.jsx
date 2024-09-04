import {
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreTable from "./StoreTable";
import apiService from "../../lib/api";

export default function StoreContainer() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchStoreData = async () => {
      try {
        const res = await apiService.get("/store/stores");
        setResponse(res);
      } catch (error) {
        console.log("Store Error:: ", error.message);
        setResponse(null);
      }
    };

    fetchStoreData();
    setLoading(false);
  }, []);

  const handleClose = () => {
    navigate("/", { replace: true });
  };

  const success = () => {
    return response.status === 200;
  };

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

  if (!success) {
    return (
      <Dialog
        open={!success}
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

  return <StoreTable rows={response.data} />;
}
