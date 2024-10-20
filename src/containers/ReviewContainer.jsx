import {getReviews} from "../api/reviewApi.js";
import ReviewTable from "../components/pages/review/ReviewTable.jsx";
import {useQuery} from "@tanstack/react-query";

function UserContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['review'],
    queryFn: getReviews,
  })

  return (
    <ReviewTable isLoading={isFetching} isError={isError} data={data}/>
  );
}

export default UserContainer;
