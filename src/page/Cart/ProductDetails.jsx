import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselectProduct } from "../../redux/slices/cartSlice";

export default function ProductDetails() {
  const { product } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  return (
    <>
      {Object.keys(product).length ? (
        <div className="row mt-5">
          <div className="col-sm-4">
            <h3 className="text-center">{product.tenSP}</h3>
            <img src={product.hinhAnh} alt={product.tenSP} width="100%" height="400px" />
          </div>
          <div className="col-sm-8">
            <h3>Thông số kĩ thuật</h3>

            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{product.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{product.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{product.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{product.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{product.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{product.rom}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-danger" onClick={() => dispatch(deselectProduct())}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
