import React, { useEffect, useState } from "react";
import axios from "axios";
import UserListUI from "./UserList.presenter.table.jsx";
import UserListError from "./UserList.presenter.error.jsx";
import UserListLoading from "./UserList.presenter.loading.jsx";


export default function usersList() {
    const [status, setStatus] = useState('');
    const [code, setCode] = useState('');
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const url ="http://3.35.212.57:8080/user/users";

    //컴포넌트가 마운트 됐을때  
    useEffect(() => {
        axios({
            method: 'get'
            ,url: url
            //,params:{}
            //,headers:{}
        })
            .then((response)=>{
            const result = response.data;
            setRows(result.data);
            setCode(result.code);
            setStatus(result.status);
            setLoading(false);
        })
            .catch((error)=>{
            console.log("Store Error:: ", error.message);
            setRows(null);
            setError(true);
        })
    },[])
    
    if(loading){
        return(
            <UserListLoading /> 
        )
    }

    if(code == 'SUCCESS'){
        return(
            <UserListUI rows={rows} /> 
        )
    }else{
        //  return (
        //      <UserListError status={status , error} /> 
        //  )  
    } 

}