import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const getProduct = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products?limit=4');
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);


  return (
  <>
        <div class="main-banner" id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div class="main-border-button">
                                    <a href="#">Purchase Now!</a>
                                </div>
                            </div>
                            <img src="assets/images/left-banner-image.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Women</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a href="#">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/images/baner-right-image-01.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Men</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a href="#">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/images/baner-right-image-02.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Kids</h4>
                                            <span>Best Clothes For Kids</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Kids</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a href="#">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/images/baner-right-image-03.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Accessories</h4>
                                            <span>Best Trend Accessories</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Accessories</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a href="#">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/images/baner-right-image-04.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main className="container mt-5">
 

  {loading ? (
    <div className="d-flex justify-content-center">
      <div>
        <span>Loading...</span>
      </div>
    </div>
  ) : (
    <div className="row">
      {products.map((item) => (
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
</>
  );
};

export default Home;
