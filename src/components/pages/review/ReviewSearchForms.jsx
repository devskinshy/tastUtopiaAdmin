import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ReviewSearchForms = ({
  onSearch,
  onSearchById,
  onSearchByStoreId,
  onSearchByUserId,
}) => {
  const [storeId, setStoreId] = useState("");
  const [userId, setUserId] = useState("");

  const handleSearch = () => {
    const hasStoreID = storeId !== "";
    const hasUserID = userId !== "";
    if (hasStoreID && hasUserID) onSearchById({ storeId, userId });
    if (hasStoreID) onSearchByStoreId({ storeId });
    if (hasUserID) onSearchByUserId({ userId });
    onSearch();
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={2}
      mt={4}
      mb={4}
    >
      <TextField
        label="가게 ID"
        variant="outlined"
        value={storeId}
        onChange={(e) => setStoreId(e.target.value)}
        sx={{ width: "100%" }}
      />
      <TextField
        label="유저 ID"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        sx={{ width: "100%" }}
      />

      <Button variant="contained" onClick={handleSearch}>
        검색
      </Button>
    </Box>
  );
};

export default ReviewSearchForms;
