import React from "react";

const UserProductBlock = ({ products, removeItem }) => {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/image_not_available.png";
    }
  };

  const renderItems = () =>
    products.cartDetail &&
    products.cartDetail.map((products) => (
      <div className="user_product_block" key={products._id}>
        <div className="item">
          <div
            className="image"
            style={{
              background: `url(${renderCartImage(products.images)}) no-repeat`,
            }}
          ></div>
        </div>
        <div className="item">
          <h4>Product name</h4>
          <div>
            {products.brand.name} {products.name}
          </div>
        </div>
        <div className="item">
          <h4>Quantity</h4>
          <div>{products.quantity} </div>
        </div>
        <div className="item">
          <h4>Price</h4>
          <div>$ {products.price} </div>
        </div>
        <div className="item btn">
          <div
            className="cart_remove_btn"
            onClick={() => removeItem(products._id)}
          >
            Remove
          </div>
        </div>
      </div>
    ));

  return <div>{renderItems()}</div>;
};

export default UserProductBlock;
