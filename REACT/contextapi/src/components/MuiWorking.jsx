import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"


const MuiWorking = () => {

    const [array, setArray] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("ss");
    }
    

    return (
        <>

            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Name"
                />
                <TextField

                    id="outlined-required"
                    label="Required"
                    defaultValue="Company Name"
                />
                <TextField
                    id="outlined-password-input"
                    label="Required"
                    defaultValue="Title" />

                <Button  variant="contained" color="success">
                    Success
                </Button>



            </form>



            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {array?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.companyName}</td>
                            <td>{product.title}</td>

                        </tr>
                    ))}
                </tbody>
            </table>


        </>




    );
}

export default MuiWorking