import { useState } from "react";
import {Button} from "@mui/material";
import UserCreateDialog from './UserCreateDialog.jsx';

function UserCreateButton() {
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
        추가
      </Button>
      <UserCreateDialog open={open} setOpen={setOpen}/>
    </>
  );
}

export default UserCreateButton;
