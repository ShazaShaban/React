import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../store/slices/CartSlice";

export default function CartView({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <img
          src={item.thumbnail}
          className="img-fluid"
          style={{ width: "150px" }}
          alt=""
        />
      </div>
      <div className="flex-grow-1 ms-3">
        <a href="#!" className="float-end text-black">
          <i className="fas fa-times" />
        </a>
        <h5 className="text-primary">{item.title}</h5>
        <h6 style={{ color: "#9e9e9e" }}>{item.category}</h6>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">
            {(item.total * item.quantity).toFixed(2)}
          </p>
          <div className="def-number-input number-input bootstrap-like">
            <button
              onClick={() => dispatch(decrement(item))}
              className="btn btn-link"
            >
              -
            </button>
            <input
              className="quantity form-control text-center"
              min={0}
              name="quantity"
              value={item.quantity}
              type="number"
            />
            <button
              onClick={() => dispatch(increment(item))}
              className="btn btn-link plus"
            >
              +
            </button>
          </div>
          <button
            className="btn btn-danger ms-3"
            onClick={() => dispatch(clear(item))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
