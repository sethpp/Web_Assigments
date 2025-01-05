import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate(); // Hook for navigation

  const handleCheckout = () => {
    // Placeholder: Redirect to checkout page or trigger process
    navigate('/checkout'); // Ensure '/checkout' route exists in your app
  };

  const increaseQuantity = (item) => {
    addToCart(item);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{ maxWidth: '100px', objectFit: 'contain' }}
                />
                <div>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price}</p>
                  <div className="d-flex align-items-center">
                    {/* Decrease button */}
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    {/* Increase button */}
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h4>Total: ${getCartTotal()}</h4>
            {/* Checkout button */}
            <button
              className="btn btn-success btn-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
