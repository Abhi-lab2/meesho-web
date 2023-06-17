import React from "react";
import { useState, useEffect } from "react";
import styles from "./homeproducts.module.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { allProducts } from "../Allproducts";

export const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Products For You</h1>
      <div className={styles.productDetails}>
        {products.map((itm) => (
          <div className={styles.containerDiv} key={itm.id}>
            <Link
              to={`product/${itm.id}`}
              style={{ textDecoration: "none", cursor: "pointer" }}
              className={styles.mainDiv}
            >
              <div className={styles.images}>
                <img
                  className={styles?.productImg}
                  src={itm.img}
                  alt="Item Image"
                  aria-hidden="true"
                />
              </div>
              <div className={styles.desc}>
                <div className={styles.title}>
                  <span>{itm.name}</span>
                </div>
                <div className={styles.prices}>
                  <span>₹{itm.sprice}</span>
                  <span className={styles.strikeDiv}>₹{itm.aprice}</span>
                  <span>
                    {Math.ceil(100 * ((itm.aprice - itm.sprice) / itm.aprice))}%
                    off
                  </span>
                </div>
                <div className={styles.disc}>
                  <span>₹{itm.aprice - itm.sprice} discount on 1st order</span>
                </div>
                <div className={styles.delvy}>
                  <span>Free Delivery</span>
                </div>
                <div className={styles.text}>
                  <div>
                    <span className={styles.ratings}>
                      {itm.rating}
                      <span className="fa fa-star checked bck"></span>
                    </span>
                    <span className={styles.reviews}>
                      {itm.reviews} Reviews
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
