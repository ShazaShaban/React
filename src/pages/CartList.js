import React from "react";
import CartView from "../components/Cart/CartView";
import { useSelector } from "react-redux";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.carts.reduce((acc,item)=>{
        acc += item.total * item.quantity;
        return acc;
  },0)
  if (cart.carts.length !== 0) {
    return (
    <>
      <h3 className="mb-5 pt-2 text-center fw-bold ">Cart</h3>
      <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: 10 }}>
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      {cart.carts.map((item) => (
                        <CartView key={item.id} item={item} />
                      ))}
                      <hr
                        className="mb-4"
                        style={{
                          height: 2,
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">
                          {totalPrice.toFixed(2)}$
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  } else return  ( <div className="mb-5 pt-2 text-center fw-bold alert alert-danger"> Empty Carts</div> )
}
