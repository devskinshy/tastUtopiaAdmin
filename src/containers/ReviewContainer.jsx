import {
  getReview,
  getReviewByStoreId,
  getReviewByUserId,
  getReviews,
} from "../api/reviewApi.js";
import ReviewSearchForms from "../components/pages/review/ReviewSearchForms.jsx";
import ReviewTable from "../components/pages/review/ReviewTable.jsx";
import { useQuery } from "@tanstack/react-query";
import { useStoreMutation } from "../hooks/useStoreMutation.js";
import { QUERY_KEYS } from "../constants/queryKeys.js";
import { useEffect } from "react";

function ReviewContainer() {
  const { data, isFetching, isError, ...temp } = useQuery({
    queryKey: [QUERY_KEYS.REVIEW],
    queryFn: getReviews,
    initialData: [],
  });

  useEffect(() => {
    temp.refetch();
  }, []);

  const searchMutation = useStoreMutation(
    ({ storeId, userId }) => getReview(storeId, userId),
    QUERY_KEYS.REVIEW
  );

  const searchByStoreIdMutation = useStoreMutation(
    ({ storeId }) => getReviewByStoreId(storeId),
    QUERY_KEYS.REVIEW
  );

  const searchByUserIdMutation = useStoreMutation(
    ({ userId }) => getReviewByUserId(userId),
    QUERY_KEYS.REVIEW
  );

  return (
    <>
      <ReviewSearchForms
        onSearchById={searchMutation.mutate}
        onSearchByStoreId={searchByStoreIdMutation.mutate}
        onSearchByUserId={searchByUserIdMutation.mutate}
        onSearch={temp.refetch}
      />
      <ReviewTable isLoading={isFetching} isError={isError} data={data} />
    </>
  );
}

export default ReviewContainer;
