import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then((res) => {
                setOriginalProducts(res.data);
                setProducts(res.data);
            });
    }, []);

    const stock = () => {
        const stock = originalProducts.filter((i) => i.unitsInStock < 5);
        setProducts(stock);
    }

    const showAll = () => {
        setProducts(originalProducts);
    }

    const cheap = () => {
        const cheap = originalProducts.filter((i) => i.unitPrice < 50);
        setProducts(cheap);

    }

    const expensive = () => {
        const expens = originalProducts.filter((i) => i.unitPrice > 50);
        setProducts(expens);
    }

    return (
        <div>
            <div>
                <button onClick={() => stock()}>Show Critic Stock</button>
                <button onClick={() => showAll()}>Show All</button>
            </div>
            <div>
                <button onClick={() => cheap()}>Cheap</button>
                <button onClick={() => expensive()}>Expensive</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
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
    );
}

export default Products;
