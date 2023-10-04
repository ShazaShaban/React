import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/slices/CartSlice";
import { Rating } from 'primereact/rating';
        
export default function ProductCard({ ProductItem}) {
  const discountedPrice = ((ProductItem.price - (ProductItem.price * (ProductItem.discountPercentage / 100)))).toFixed(2)

  const addToCartHandler = (product) => {
    dispatch(addToCart({...product, quantity:1,total:discountedPrice}));
  }
  const navigate = useNavigate();
  const redirectToDetails = (id) => {
    navigate(`/product-details/${id}`)
  }
const dispatch = useDispatch()
  return (
    <>
    <div className="card w-100 h-100 my-2 shadow-2-strong d-flex flex-column">
      <img
        src={ProductItem.thumbnail}
        className="card-img-top position-relative " style={{height: 250}}  alt=""
        onClick={() => redirectToDetails(ProductItem.id)}
        role="button"
      />
       {ProductItem.stock > 7 ? (
          <span className="badge rounded text-bg-success position-absolute mt-1 ms-1 px-3 py-1">in stock</span>
        ) : (
          <span className="badge rounded text-bg-danger position-absolute mt-1 ms-1 px-3 py-1">out of stock</span>
        )}
      <div className="card-body d-flex flex-column">
        <div className="d-flex flex-row">
          <h5 className="mb-1 ms-auto fw-bold"><span>${discountedPrice}</span></h5>
        </div>
        <h3 className="card-tilte">{ProductItem.title} </h3>
        <p className="card-text">
         {ProductItem.description}
        </p>
       <div className="d-flex align-items-end mb-5">
       <Rating  className="card-text d-flex text-success" value={ProductItem.rating} readOnly cancel={false} />
       </div>
        <div className="d-flex align-items-end justify-content-center">
          <button className="btn btn-lg btn-outline-secondary px-5 rounded-3 shadow-0 me-1" 
          onClick={() => 
             addToCartHandler(ProductItem)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </>
  );
}