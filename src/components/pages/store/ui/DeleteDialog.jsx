import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const DeleteDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>삭제 확인</DialogTitle>
      <DialogContent>
        <DialogContentText>정말로 이 가게를 삭제하시겠습니까?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          취소
        </Button>
        <Button onClick={handleConfirm} color="secondary">
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
