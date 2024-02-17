import classes from "../WideGlass/WideGlass.module.css";
import deleteImage from "../../assets/delete.svg";
import axios from "axios";
import React, { useState } from "react";

const WideGlass = (props) => {
  const [isRemoved, setisRemoved] = useState(true);
  
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
  function remWishlist() {
    const requestOptions = customHeader();
    axios.delete(
      "http://127.0.0.1:8000/api/delbasket/" + String(props.array.id) + "/",
      requestOptions
    );
    setisRemoved(false);
  }
  return (
    <div>
      {isRemoved ? (
        <div className={classes.GlassMini}>
          <a
            href={"http://localhost:3000/glass/" + props.array.sku_id}
            className={classes.link}
          >
            <img
              id="image"
              src={
                "http://127.0.0.1:8000/store/store/images/" +
                props.array.sku_id +
                ".jpg"
              }
              className={classes.image}
              alt="glassImage"
            />
          </a>
          <div className={classes.info}>
            <h1>{props.array.name.substring(0, 70)}</h1>
            <h1>{props.array.brand}</h1>
            <h1>{props.array.price}00</h1>
            {props.basket ? (
              <button onClick={remWishlist} className={classes.delete}>
                <p>حذف</p>
                <img src={deleteImage} alt="delete" />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WideGlass;
