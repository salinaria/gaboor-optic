import classes from "../GlassPage/GlassPage.module.css";
import Navbar from "../Navbar/Navbar";
import glassline from "../../assets/glassline.svg";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";
import glass3 from "../../assets/glass3.png";
import cart_add from "../../assets/cart-add.svg";
import close from "../../assets/close.svg";
import GlassMini from "../Miniglass/Miniglass";

const newest = [
  {
    image: glass1,
    name: "Aviator",
    brand: "Ray Ban",
    price: "1,400",
    link: "/glass/aviator",
  },
  {
    image: glass2,
    name: "Aviator",
    brand: "Ray Ban",
    price: "1,300",
    link: "/glass/aviator",
  },
  {
    image: glass3,
    name: "Aviator",
    brand: "Ray Ban",
    price: "1,800",
    link: "/glass/aviator",
  },
];

const array = {
  image: glass1,
  name: "Aviator",
  brand: "Ray Ban",
  price: "۱.۴۰۰.۰۰۰",
  sex: "مردانه",
  color: "طلایی",
  link: "/glass/aviator",
};
const GlassPage = (props) => {
  return (
    <div>
      <Navbar />
      <p>
        !با استفاده از واقعیت مجازی، عینک را روی صورت خود ببینید و بعد انتخاب
        کنید
      </p>
      <div className={classes.container}>
        <img
          id="image"
          src={array.image}
          className={classes.image}
          alt="glassImage"
        />
        <div className={classes.info}>
          <div className={classes.title}>
            <img src={close} alt="close" />
            <p>مشخصات عینک</p>
            <img src={close} alt="close" />
          </div>
          <div className={classes.autocont}>
            <div className={classes.data}>
              <h1>{array.name}</h1>
              <h1>{array.brand}</h1>
              <h1>{array.sex}</h1>
              <h1>{array.color}</h1>
              <h1>دستمال، جعبه</h1>
              <h1>{array.price}</h1>
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
          <button className={classes.button}>
            <img src={cart_add} alt="cart" />
            <p>افزودن به سبد خرید</p>
          </button>
        </div>
      </div>
      <div className={classes.newest}>
        <h1 className={classes.new_text}>پیشنهادی بر اساس انتخاب شما</h1>
        <div className={classes.line}></div>
        <GlassMini array={newest} />
      </div>
    </div>
  );
};

export default GlassPage;
