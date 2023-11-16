import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const product = products.find((i) => i.id == id);

  console.log(product);

  return (
    <>
      {product && (
        <div>
          <p>
            <span>ID: </span>
            <span>{product.id}</span>

          </p>
          <p>
            <span>NAME: </span>
            <span>{product.name}</span>

          </p>
          <p>
            <span>UNITPRICE: </span>
            <span>{product.unitPrice}$</span>

          </p>
          <p>
            <span>STOCK: </span>
            <span>{product.unitsInStock}</span>

          </p>
        </div>
      )}
    </>
  );
}

export default Detail;
