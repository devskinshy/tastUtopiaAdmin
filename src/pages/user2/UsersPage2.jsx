import UserList from "./UserList.container.jsx";


export function test1(){
  return alert("test1");  
};

export function test2(temp){
  alert("test2"+temp);
};

export default function users2() {
  return (
    <UserList/>

  )
   
}