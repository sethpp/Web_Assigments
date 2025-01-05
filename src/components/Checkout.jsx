import React, { useState, useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CartContext } from '../context/CartContext'; // Adjust the path based on your setup

const Checkout = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  // Access cart items from context
  const { cartItems, getCartTotal } = useContext(CartContext);

  const handleApprove = (orderID) => {
    // Handle post-transaction actions here (e.g., updating the database)
    setPaidFor(true);
    console.log('Order ID:', orderID);
  };

  if (paidFor) {
    return <h2>Payment successful! Thank you for your purchase.</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <h4>Total: ${getCartTotal()}</h4> {/* Display total */}
      <PayPalScriptProvider options={{ 'client-id': 'AS7SNDc-Iuiy0wuuE1DcRZEFvk0mulYeg3GUhdUVwGFfUZNNUOBX89wXeKizvQeQs3idS9IHKun3LFjs' }}>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: getCartTotal().toString(), // Dynamic cart total
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handleApprove(data.orderID);
            });
          }}
          onError={(err) => {
            setError(err.message);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
