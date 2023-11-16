import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then((res) => setProducts(res.data));
    }, []);

    console.log(products);

    const navigate=useNavigate()

    return (
        <div>
            <table>
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
                        <tr onClick={()=> navigate(`/products/${product?.id}`)}  key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
