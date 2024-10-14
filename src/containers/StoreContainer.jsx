import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStores, deleteStore, editStore, addStore } from "../api/storeApi.js";

import { useDialog } from "../hooks/useDialog.js";
import { useStoreMutation } from "../hooks/useStoreMutation.js";

import StoreTable from "../components/pages/store/StoreTable.jsx";
import AddDialog from "../components/pages/store/ui/AddDialog.jsx";
import EditDialog from "../components/pages/store/ui/EditDialog.jsx";
import DeleteDialog from "../components/pages/store/ui/DeleteDialog.jsx";

const QUERY_KEY = "store";

function StoreContainer() {
  const [selectedStore, setSelectedStore] = useState(null);
  const addDialog = useDialog();
  const editDialog = useDialog();
  const deleteDialog = useDialog();

  const { data: stores, isFetching, isError } = useQuery({
    queryKey: [QUERY_KEY],  // 고유 ID
    queryFn: getStores,     // 데이터 호출 함수
    initialData: [],        // 초기 데이터 (빈 배열로 설정)
    refetchOnWindowFocus: false,  // 창 포커스 시 자동 리패칭 여부 (false는 비활성화)
    staleTime: 0,           // 데이터가 오래된 상태로 간주되는 시간 (0이면 항상 새로고침)
    cacheTime: 0,           // 캐시된 데이터를 유지하는 시간 (0이면 즉시 삭제)
    retry: 3,               // 실패 시 최대 3번까지 재시도
    refetchInterval: 60000,  // 1분마다 자동 리패칭
    refetchOnReconnect: true, // 네트워크 재연결 시 자동 리패칭
    keepPreviousData: true,  // 새로운 데이터를 로딩하는 동안 이전 데이터 유지
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // 재시도 간 지연 시간 (최대 30초)
});

  const addStoreMutation = useStoreMutation(addStore, QUERY_KEY, {
    onSuccess: (data) => {
      if (!data) return;
      addDialog.handleClose();
      window.alert("추가 되었습니다.");
    }
  });

  const editStoreMutation = useStoreMutation(
    ({ seq: storeId, ...storeData }) => editStore(storeId, storeData),
    QUERY_KEY,
    {
      onSuccess: (data) => {
        if (!data) return;
        editDialog.handleClose();
        window.alert("수정 되었습니다.");
      },
    }
  );

  const deleteStoreMutation = useStoreMutation(deleteStore, QUERY_KEY, {
    onSuccess: (data) => {
      if (!data) return;
      deleteDialog.handleClose();
      window.alert("삭제 되었습니다.");
    }
  });

  const onAdd = useCallback(() => {
    setSelectedStore(null);
    addDialog.handleOpen();
  }, [addDialog]);

  const onEdit = useCallback((store) => {
    setSelectedStore(store);
    editDialog.handleOpen();
  }, [editDialog]);

  const onDelete = useCallback((store) => {
    setSelectedStore(store);
    deleteDialog.handleOpen();
  }, [deleteDialog]);

  const onConfirmDelete = useCallback(() => {
    if (selectedStore) {
      deleteStoreMutation.mutate(selectedStore.seq);
    }
  }, [selectedStore, deleteStoreMutation]);

  return (
    <>
      <StoreTable
        isLoading={isFetching}
        isError={isError}
        data={stores}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <AddDialog
        open={addDialog.open}
        handleClose={addDialog.handleClose}
        onAddStore={(store) => addStoreMutation.mutate(store)
        }
      />

      <EditDialog
        open={editDialog.open}
        handleClose={editDialog.handleClose}
        onEditStore={(store) => editStoreMutation.mutate(store)}
        store={selectedStore}
      />

      <DeleteDialog
        open={deleteDialog.open}
        handleClose={deleteDialog.handleClose}
        handleConfirm={onConfirmDelete}
      />
    </>
  );
}

export default StoreContainer;
