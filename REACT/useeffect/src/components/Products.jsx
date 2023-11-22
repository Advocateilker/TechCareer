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

    const navigate = useNavigate()

    const handleDelete = (id) => {
        const filtered = products.filter((i) => i.id !== id)

        setProducts(filtered)


    }

    return (
        <div className='terms'>

            <h2 className=''>Ürün Adeti:{products?.length}</h2>

            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>DETAY</th>
                        <th>SİLME</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td><button className='btn btn-warning' onClick={() => navigate(`/products/${product?.id}`)}>DETAIL's</button></td>
                            <td> <button className='btn btn-danger' onClick={() => handleDelete(product.id)} >DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
