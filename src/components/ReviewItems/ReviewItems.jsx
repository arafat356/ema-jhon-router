import React from 'react';

const ReviewItems = (props) => {
  const { name, price, quantity, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className="product">
      {/* <div>
        <img src={img} alt="" srcset="" />
      </div> */}
      <div>
        <h1 className="product-name">{name}</h1>
        <h2>{price}</h2>
        <p>{quantity}</p>
        <button onClick={() => handleRemove(key)} className="btn-regular">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;
