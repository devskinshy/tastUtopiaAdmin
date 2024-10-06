import {getReviews} from "../api/reviewApi.js";
import useApi from "../hooks/useApi.js";
import ReviewTable from "../components/pages/review/ReviewTable.jsx";

function UserContainer() {
  const [status, data] = useApi(getReviews);

  return (
    <ReviewTable status={status} data={data}/>
  );
}

export default UserContainer;
