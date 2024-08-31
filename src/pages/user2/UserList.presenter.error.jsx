import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usersListError({status} , {error}) {
    const [error2, setErro2] = useState();
    const navigate = useNavigate();
    
    setErro2(error);

    const handleClose = () => {
        setErro2(false);
        navigate("/", { replace: true });
    };

   return(
    //alert(status),
    <Dialog
        open={error2}
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
