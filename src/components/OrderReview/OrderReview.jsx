import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCarts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOrder = () => {
    navigate('/placeorder');
    setCart([]);

    clearTheCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItems
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
