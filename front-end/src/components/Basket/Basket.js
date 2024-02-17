import Navbar from "../Navbar/Navbar";
import classes from "../Basket/Basket.module.css";
import WideGlass from "../WideGlass/WideGlass";
import blob from "../../assets/blob.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";

function sum_price(Data) {
  let sum_price = 0;
  Data.map((glass, index) => (sum_price += glass.glass_details[0].price));
  return sum_price;
}
const Basket = () => {
  const [Data, setData] = useState([
    {
      id: 0,
      user_profile: 0,
      glass_saved_to_basket: 0,
      glass_details: [
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
      ],
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
      .get("http://127.0.0.1:8000/api/basketlist/", requestOptions)
      .then((response) => setData(Object.values(response.data)));
  }, []);

  return (
    <div>
      <Navbar />
      {Data.length === 0 ? (
        <p>سبد خرید شما خالی است!</p>
      ) : (
        <div>
          <div className={classes.container}>
            <h1 className={classes.find}>سبد خرید من</h1>
            <div className={classes.line}></div>
            <div className={classes.items}>
              {Data.map((glass, index) => (
                <WideGlass array={glass.glass_details[0]} basket={true} />
              ))}
            </div>
          </div>

          <img src={blob} alt="blob" className={classes.blob} />
          <div className={classes.sum}>
            <p className={classes.title}>جمع خرید من</p>
            {Data.map((glass, index) => (
              <p className={index > 0 ? classes.numbers : classes.numbers0}>
                {index > 0 ? "+ " : null}
                {glass.glass_details[0].price}00.000
              </p>
            ))}
            <p className={classes.discount0}>۰</p>
            <p className={classes.discount}>تخفیف</p>
            <div className={classes.line2}></div>
            <p className={classes.sumall}>{sum_price(Data)}00.000</p>
            <p className={classes.legend}>نهایی</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
