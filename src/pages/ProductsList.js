import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../apis/config";
import { getProducts} from "../apis/Product";
import ProductCard from "../components/Products/ProductCard";


export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);


  useEffect(() => {
    getProducts()
      .then((res) => setProductsList(res.data.products))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
    
      <h6 className=" text-start mt-5 mb-3" >Welcome to our website, start shopping...</h6>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {productsList.map((product) => {
          return (
            <div className="col">
              <ProductCard
                ProductItem={product}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}