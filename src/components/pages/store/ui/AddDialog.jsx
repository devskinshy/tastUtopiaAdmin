import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, Divider } from "@mui/material";
import { useState } from "react";
import { storeFields } from "../../../../constants/formFields";
import { useEffect } from 'react';

// 초기 데이터
const initialData = {
  kakaoIdx: 0,
  storeName: '',
  category: '',
  latitude: 0,
  longitude: 0,
  region: '',
  detailAddress: '',
  zipcode: '',
};

const AddDialog = ({ open, handleClose, onAddStore }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (open) {
      setData(initialData);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAddStore(data);
    handleClose();
    setData(initialData);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
        가게 추가
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ padding: '24px', backgroundColor: '#fafafa' }}>
        <Box component="form" display="flex" flexDirection="column" gap={3} mt={2}>
          {storeFields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              value={data[field.name] || ''}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required={field.required}
              InputLabelProps={{
                shrink: true,
              }}
            />
          ))}
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
        <Button onClick={handleClose} color="secondary" sx={{ mr: 2 }}>
          취소
        </Button>
        <Button onClick={handleAdd} color="primary" variant="contained" sx={{ boxShadow: 2 }}>
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
