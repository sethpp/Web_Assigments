import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const getProduct = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      const uniqueCategories = [
        ...new Set(res.data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  return (
<main className="container mt-5">
  {/* Filter Section */}
  <div className="row mb-4">
    <div className="col-12 col-md-4">
      <div className="form-group">
        <label htmlFor="categoryFilter">Filter by Category</label>
        <select
          id="categoryFilter"
          className="form-control"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>

  {/* Loading Spinner */}
  {loading ? (
    <div className="d-flex justify-content-center">
      <div>
        <span>Loading...</span>
      </div>
    </div>
  ) : (
    <div className="row">
      {/* Product Cards */}
      {filteredProducts.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card h-100 shadow-lg border-0 rounded">
            <img
              src={item.image}
              className="card-img-top w-75 mx-auto mt-3"
              alt={item.title}
              style={{ objectFit: 'contain', maxHeight: '200px' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">{item.title}</h5>
              <p className="card-text text-muted">{item.description.slice(0, 100)}...</p>
              <p className="card-text">
                <strong>Price: </strong>${item.price}
              </p>
              <div className="mt-auto text-center">
                <Link to={`/detail/${item.id}`} className="btn btn-primary mt-3">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</main>
  );
};

export default Product;
