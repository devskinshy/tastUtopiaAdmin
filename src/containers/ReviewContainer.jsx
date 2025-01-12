import {getReviews} from "../api/reviewApi.js";
import ReviewTable from "../components/pages/review/ReviewTable.jsx";
import {useQuery} from "@tanstack/react-query";
import {Paper} from "@mui/material";
import DefaultTableContainer from "../components/ui/table/DefaultTableContainer.jsx";

function UserContainer() {
  const {data, isFetching, isError, ...temp} = useQuery({
    queryKey: ['review'],
    queryFn: getReviews,
  })

  console.log('reveiw', data, isFetching, isError, temp)
  return (
    <DefaultTableContainer component={Paper} table={ReviewTable} isLoading={isFetching} isError={isError} data={data} />
  );
}

export default UserContainer;
