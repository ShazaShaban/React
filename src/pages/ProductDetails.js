import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../apis/config";
import ProductDetailsCard from "../components/Products/Product_details_card";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) =>setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
     
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <ProductDetailsCard 
            item = {product} />
          </div>
        </div>
      </section>
    </>
  );
}