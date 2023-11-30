import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../context/BasketContext';
import { useDispatch } from 'react-redux';
import { addLike } from '../store/slicers/likeSlicer';


const Products = () => {
    const [products, setProducts] = useState();
    const context = useContext(BasketContext)

const dispatch=useDispatch()

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then((res) => setProducts(res.data));
    }, []);

    console.log(products);

    const navigate = useNavigate()



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
                            <td><button onClick={()=>dispatch(addLike(product))} className='btn btn-primary'>BEĞEN</button></td>
                            <td><button className='btn btn-warning' onClick={() => navigate(`/products/${product?.id}`)}>DETAIL's</button></td>
                            <td> <button  onClick={()=>context.addToBasket(product)}  className='btn btn-danger' >SEPETE EKLE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
