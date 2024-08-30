import { useEffect, useState } from "react";
import ReviewListUI from "./ReviewList.presenter";
import axios from "axios";


export default function ReviewList() {

    const [rows, setRows] = useState([]);


    useEffect(() => {
        axios
          .get("http://3.35.212.57:8080/review/all")
          .then((response) => {
              const result = response.data;
              setRows(result.data);
          })
          .catch((error) => {
            console.log("Review Error:: ", error.message);
          });
      }, []);



  return (
    <ReviewListUI
        rows={rows}
    />
  )
}
