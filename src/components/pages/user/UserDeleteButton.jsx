import { useState } from "react";
import {Button} from "@mui/material";
import UserDeleteDialog from './UserDeleteDialog.jsx';

function UserDeleteButton({selectedSeq}) {
  const [open, setOpen] = useState(false);

  const onHandleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={onHandleClick}
      >
        삭제
      </Button>
      <UserDeleteDialog open={open} setOpen={setOpen} selectedSeq={selectedSeq}/>
    </>
  );
}

export default UserDeleteButton;
