import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [users,setUsers]=useState([])
    const [posts,setPosts]=useState([])


    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))

    },[])

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>setPosts(res.data))

    },[])

    console.log(users)
    console.log(posts)

    return (
        <div className=''>

            <div className='d-flex flex-column w-25 mb-5'>
                <label htmlFor="users">USERS</label>
                <select name="users" id="users">
                    
                    {users?.map((user)=>
                    (
                        <option value="">{user.username}</option>
                    ))}

                </select>


            </div>
            <div className='terms'>

            <h2 className=''>Post Adeti:{posts?.length}</h2>

            <table className='table table-primary table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERID</th>
                        <th>TITLE</th>
                        <th>BODY</th>

                    </tr>
                </thead>
                <tbody>
                    {posts?.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



        </div>
    )
}

export default Post