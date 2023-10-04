import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React ,{useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "primereact/rating";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/slices/CartSlice";

export default function ProductDetailsCard({ item }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const discountedPrice = ((item.price - (item.price * (item.discountPercentage / 100)))).toFixed(2)
  const total = quantity * discountedPrice
  const increaseQuantity= ()=>{
      setQuantity((prevQuntity=>{
        let newQuantity = prevQuntity + 1
        if (newQuantity > item.stock ) {
          newQuantity = item.stock
        }
        return newQuantity
      }))
  }
  const decreaseQuantity= ()=>{
    setQuantity((prevQuntity=>{
      let newQuantity = prevQuntity - 1
      if (newQuantity < 1 ) {
        newQuantity = 1
      }
      return newQuantity
    }))
}
const addToCartHandler = (product) => {

  dispatch(addToCart({...product, quantity: quantity,total}));
}
  return (
    <>
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <img
            style={{ maxWidth: "100%", height:"550px", margin: "auto" }}
            className="rounded-4 fit w-100"
            src={item.thumbnail}
            alt=""
          />
        </div>
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">{item.title}</h4>
          <div className="d-flex flex-row my-3">
            <div className="text-success d-flex align-items-center mb-1">
              <Rating
                className="d-flex text-success"
                value={item.rating}
                readOnly
                cancel={false}
              />
              <span className="ms-2">{item.rating}</span>
            </div>          
          </div>
          <div className="d-flex flex-row my-3 ">
            {item.stock > 7 ? (
              <span className="badge rounded-pill text-bg-success position-absolute mt-0 px-5 py-2 fs-6">
                in stock
              </span>
            ) : (
              <span className="badge rounded-pill text-bg-danger position-absolute mt-2 mt-0 px-5 py-2 fs-6">
                out of stock
              </span>
            )}
            </div>
          <div className="mb-3 my-5">
            <span className="h5 me-1 fs-3">${discountedPrice}</span>
            <span class="text-danger me-4 fs-3"><sup><s>${item.price}</s></sup></span>
            <span className="text-success fs-4">-%{item.discountPercentage}</span>
          </div>
          <p>{item.description}</p>
          <div className="row">
            <dt className="col-3">Category</dt>
            <dd className="col-9">{item.category}</dd>
            <dt className="col-3">Brand</dt>
            <dd className="col-9">{item.brand}</dd>
          </div>
          <hr />
          <div className="row mb-4">
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Quantity</label>
              <div className="input-group mb-3" style={{ width: 170 }}>
                <button
                  className="btn btn-white border border-secondary px-3"
                  type="button"
                  id="button-addon1"
                  data-mdb-ripple-color="dark"
                  onClick={() => {
                    decreaseQuantity()
                  }
                    }
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="text-success"/>
                </button>
                <input
                  type="text"
                  className="form-control text-center border border-secondary"
                  placeholder={0}
                  value={quantity}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button
                  className="btn btn-white border border-secondary px-3"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                  onClick={() => {
                    increaseQuantity()
                  }
                    }
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="text-success" />
                </button>
              </div>
            </div>
          </div>
          <button  className="btn btn-success shadow-0 me-5 px-5 rounded-5 btn-lg">
            Buy now
          </button>
          <button className="btn btn-outline-success shadow-0 px-5 rounded-5 btn-lg"  onClick={() => 
             {addToCartHandler(item)}}>
             Add to cart
          </button>
        </div>
      </main>
    </>
  );
}