import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { storeFields } from "../../../../constants/formFields";

// 초기 데이터
const initialData = {
  kakaoIdx: '',
  storeName: '',
  category: '',
  latitude: '',
  longitude: '',
  region: '',
  detailAddress: '',
  zipcode: '',
};

const EditDialog = ({ open, handleClose, onEditStore, store }) => {
  const [storeData, setStoreData] = useState(initialData);

  useEffect(() => {
    if (store) {
      setStoreData(store);
    }
  }, [store]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    onEditStore(storeData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
        가게 수정
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ padding: '24px', backgroundColor: '#fafafa' }}>
        <Box component="form" display="flex" flexDirection="column" gap={3} mt={2}>
          {storeFields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              value={storeData[field.name] || ''}
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
        <Button onClick={handleEdit} color="primary" variant="contained" sx={{ boxShadow: 2 }}>
          수정
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
