// src/components/ProductDetail.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext,  } from "../context/CartContext";  // Import the cart context

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const {addToCart}=useContext(CartContext)  // Access the addToCart function

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getDetail();
  }, [id]);

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h3 className="mt-3">${product.price}</h3>
          {/* <button className="btn btn-primary mt-3" onClick={()=
          >
            Add to Cart
          </button> */}
          <button className="btn btn-primary mt-3" 
          
            onClick={()=>{
              addToCart(product);
            }}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Detail;
