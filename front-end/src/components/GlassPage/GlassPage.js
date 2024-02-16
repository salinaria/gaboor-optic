import classes from "../GlassPage/GlassPage.module.css";
import Navbar from "../Navbar/Navbar";
import glassline from "../../assets/glassline.svg";
import cart_add from "../../assets/cart-add.svg";
import close from "../../assets/close.svg";
import GlassMini from "../Miniglass/Miniglass";
import Tryon from "../Tryon/Tryon";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const GlassPage = (props) => {
  let slug = useParams();

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
  const [Data, setData] = useState({
    sku_id: "",
    name: "",
    image: "",
    brand: "",
    sex: "",
    price: 0,
    color: "",
    recommended: [],
  });

  function addBasket() {
    const requestOptions = customHeader();
    axios.post(
      "http://127.0.0.1:8000/api/watchlist/",
      { movie_saved_to_watch: Data.sku_id },
      requestOptions
    );
  }

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movie/" + String(slug.id))
      .then((response) => setData(response.data))
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <p className={classes.comeon}>
        !با استفاده از واقعیت مجازی، عینک را روی صورت خود ببینید و بعد انتخاب
        کنید
      </p>
      <div className={classes.butcont}>
        <button onClick={() => setOpen(true)} className={classes.butt}>
          امتحان روی صورت
          {open ? <div className={classes.buttline}></div> : null}
        </button>
        <button onClick={() => setOpen(false)} className={classes.butt}>
          تصویر
          {open ? null : <div className={classes.buttline}></div>}
        </button>
      </div>

      <div className={classes.container}>
        <div className={classes.image}>
          {open ? <Tryon id={Data.sku_id} /> : null}
        </div>
        {open ? null : (
          <img
            id="image"
            src={
              "http://127.0.0.1:8000/store/store/images/" + Data.sku_id + ".jpg"
            }
            className={classes.image}
            alt="glassImage"
            style={{ display: "block" }}
          />
        )}
        <div className={classes.info}>
          <div className={classes.title}>
            <img src={close} alt="close" />
            <p>مشخصات عینک</p>
            <img src={close} alt="close" />
          </div>
          <div className={classes.autocont}>
            <div className={classes.data}>
              <h1>{Data.name.substring(0, 23)}</h1>
              <h1>{Data.brand}</h1>
              <h1>{Data.sex}</h1>
              <h1>{Data.color}</h1>
              <h1>دستمال، جعبه</h1>
              <h1>{Data.price}00.000</h1>
            </div>
            <img
              src={glassline}
              className={classes.glassline}
              alt="glassline"
            />
            <div className={classes.names}>
              <h1>مدل</h1>
              <h1>برند</h1>
              <h1>جنسیت</h1>
              <h1>رنگ</h1>
              <h1>اقلام همراه عینک</h1>
              <h1>قیمت</h1>
            </div>
          </div>
          <button className={classes.button} onClick={addBasket}>
            <img src={cart_add} alt="cart" />
            <p>افزودن به سبد خرید</p>
          </button>
        </div>
      </div>
      <div className={classes.newest}>
        <h1 className={classes.new_text}>پیشنهادی بر اساس انتخاب شما</h1>
        <div className={classes.line}></div>
        <GlassMini array={Data.recommended} />
      </div>
    </div>
  );
};

export default GlassPage;
