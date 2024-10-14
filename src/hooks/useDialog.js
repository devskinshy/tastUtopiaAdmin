import { useState } from 'react';

export const useDialog = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (onConfirm) => {
    if (onConfirm) {
      onConfirm();
    }
    handleClose();
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleConfirm,
  };
};
