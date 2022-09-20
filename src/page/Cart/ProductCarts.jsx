import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { decrease, increase, remove } from "../../redux/slices/cartSlice";

const ProductCarts = ({ show, onClose }) => {
  const { carts } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const deleteProduct = (productId) => {
    dispatch(remove(productId));
  };

  const increaseProduct = (productId) => {
    dispatch(increase(productId));
  };

  const decreaseProduct = (productId) => {
    dispatch(decrease(productId));
  };

  return (
    <Modal show={show} onHide={onClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Giỏ hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item) => {
              return (
                <tr key={item.maSP}>
                  <td>{item.maSP}</td>
                  <td>{item.tenSP}</td>
                  <td>
                    <img src={item.hinhAnh} alt={item.tenSP} width="50px" height="50px" />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.giaBan}</td>
                  <td>{item.quantity * item.giaBan}</td>
                  <td className="d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => deleteProduct(item.maSP)}>
                      Xoá
                    </button>
                    <button className="btn btn-success" onClick={() => increaseProduct(item.maSP)}>
                      +
                    </button>
                    <button className="btn btn-primary" onClick={() => decreaseProduct(item.maSP)}>
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductCarts;
