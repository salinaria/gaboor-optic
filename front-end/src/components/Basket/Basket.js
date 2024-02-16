import Navbar from "../Navbar/Navbar";
import classes from "../Basket/Basket.module.css";
import WideGlass from "../WideGlass/WideGlass";
import blob from "../../assets/blob.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Basket = () => {
  const [Data, setData] = useState([
    {
      sku_id: "",
      name: "",
      image: "",
      brand: "",
      sex: "",
      price: 0,
      color: "",
      recommended: [],
    },
  ]);

  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  const customHeader = () => ({
    headers: {
      "content-type": "application/json",
      Authorization: "Token " + currentUser().token,
    },
    validateStatus: (status) => status === 200,
  });

  useEffect(() => {
    const requestOptions = customHeader();
    axios
      .get("http://127.0.0.1:8000/api/watchlist/", requestOptions)
      .then((response) => setData(Object.values(response.data)));
  }, []);

  return (
    <div>
      <Navbar />

      <div className={classes.container}>
        <h1 className={classes.find}>سبد خرید من</h1>
        <div className={classes.line}></div>
        <div className={classes.items}>
          {Data.map((glass, index) => (
            <WideGlass array={glass} basket={true} />
          ))}
        </div>
      </div>

      <img src={blob} alt="blob" className={classes.blob} />
      <div className={classes.sum}>
        <p className={classes.title}>جمع خرید من</p>
        {Data.map((glass, index) => (
          <p className={classes.numbers}>{glass.price}</p>
        ))}
        <p className={classes.discount0}>۰</p>
        <p className={classes.discount}>تخفیف</p>
        <div className={classes.line2}></div>
        <p className={classes.sumall}>۱۳.۸۰۰.۰۰۰</p>
        <p className={classes.legend}>نهایی</p>
      </div>
    </div>
  );
};

export default Basket;
