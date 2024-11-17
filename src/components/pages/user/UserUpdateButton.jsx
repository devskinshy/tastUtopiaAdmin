import { useState } from "react";
import {Button} from "@mui/material";
import UserUpdateDialog from './UserUpdateDialog.jsx';

function UserUpdateButton({selectedSeq}) {
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
        수정
      </Button>
      <UserUpdateDialog open={open} setOpen={setOpen} selectedSeq={selectedSeq}/>
    </>
  );
}

export default UserUpdateButton;
