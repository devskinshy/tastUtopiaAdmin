import UserContainer from "../containers/UserContainer.jsx";
import StoreContainer from "../containers/StoreContainer.jsx";
import ReviewContainer from "../containers/ReviewContainer.jsx";


export default function HomePage() {
  return (
    <div>
      <StoreContainer/>
      <UserContainer/>
      <ReviewContainer/>
    </div>
  )
}
