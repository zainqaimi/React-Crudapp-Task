import React from 'react'
import { getDatabase, ref,  set } from "firebase/database";
import { app } from './FireBaseApp';

function Firedata() {
   const putData = () =>{
    const db = getDatabase(app);
    set(ref(db, 'users/zain'),{
      username: "zain",
      email: "zain123@gmail.com",
      age:  28
    });
   }
  return (
    <>
        <div>DataBase</div>
        <button onClick={putData}>push Data</button>
    </>
  )
}

export default Firedata