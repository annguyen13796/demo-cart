import React, { useState } from "react";
import ProductCarts from "./ProductCarts";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const PhoneShop = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <h1 className="text-center">Phone Shop</h1>

      <div className="d-flex justify-content-end my-4">
        <button className="btn btn-warning" onClick={handleShow}>
          Giỏ Hàng
        </button>
      </div>

      <ProductList />
      <ProductDetails />
      <ProductCarts show={show} onClose={handleClose} onShow={handleShow} />
    </div>
  );
};

export default PhoneShop;
