import React from "react";
import { useDispatch } from "react-redux";
import { buyProduct, selectProduct } from "../../redux/slices/cartSlice";
import products from "./data.json";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleSelect = (product) => {
    dispatch(selectProduct(product));
  };

  const handleBuy = (product) => {
    dispatch(buyProduct(product));
  };

  const handleDelete = (productId) => {};

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Giá bán</th>
          <th>Hình ảnh</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.maSP}>
              <td>{product.maSP}</td>
              <td>{product.tenSP}</td>
              <td>{product.giaBan}</td>
              <td>
                <img src={product.hinhAnh} alt={product.tenSP} width="70px" height="70px" />
              </td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-success" onClick={() => handleSelect(product)}>
                  Chi tiết
                </button>
                <button className="btn btn-primary ml-2" onClick={() => handleBuy(product)}>
                  Mua hàng
                </button>
                {/* <button className="btn btn-danger ml-2" onClick={() => handleDelete(product.maSP)}>
                  Xóa
                </button> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
