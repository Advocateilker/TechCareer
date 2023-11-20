import React, { useEffect } from 'react'
import axios from 'axios'; 

const Users = () => {

    useEffect(()=>{

        axios.get("http://localhost:3038/users")
        .then((res)=> console.log(res.data))

    },[])
  return (
    <div>Users</div>
  )
}

export default Users