import React from 'react'
import { useSelector } from 'react-redux'

const LikesPages = () => {

 const state = useSelector((store) => store);

 console.log(state.likes)

 const products=state.likes
  return (
    <div>
      <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default LikesPages