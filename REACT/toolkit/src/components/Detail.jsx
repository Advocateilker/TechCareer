import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'


const Detail = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const context = useContext(BasketContext)

  console.log(context)

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const product = products.find((i) => i.id == id);

  console.log(product);

  return (
    <>
      {product && (

        <div class="card text-center">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">NAME: {product.name}</h5>
            <p class="card-text">Product Id:{product.id} </p>
            <p class="card-text">Product UnitPrice: {product.unitPrice}</p>
            <p class="card-text">Stock: {product.unitsInStock}</p>
            <button  onClick={()=>context.addToBasket(product)}  className='btn btn-primary' >SEPETE EKLE</button>
            <button className='btn btn-danger' onClick={() => navigate("/products")}>Önceki Sayfaya Dön</button>
          </div>

        </div>





      )}
    </>
  );
}

export default Detail;
