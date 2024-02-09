import Navbar from "../Navbar/Navbar";
import classes from "../Basket/Basket.module.css";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";
import glass3 from "../../assets/glass3.png";
import WideGlass from "../WideGlass/WideGlass";
import blob from "../../assets/blob.svg";

const newest = [
  {
    image: glass1,
    name: "Aviator",
    brand: "Ray Ban",
    price: "۱.۴۰۰.۰۰۰",
    link: "/glass/aviator",
  },
  {
    image: glass2,
    name: "Aviator",
    brand: "Ray Ban",
    price: "۱.۳۰۰.۰۰۰",
    link: "/glass/aviator",
  },
  {
    image: glass3,
    name: "Aviator",
    brand: "Ray Ban",
    price: "۱.۸۰۰.۰۰۰",
    link: "/glass/aviator",
  },
];

const Basket = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.find}>سبد خرید من</h1>
        <div className={classes.line}></div>
        <div className={classes.items}>
          {newest.map((glass, index) => (
            <WideGlass array={glass} />
          ))}
        </div>
      </div>
      <img src={blob} alt="blob" className={classes.blob} />
      <div className={classes.sum}>
        <p className={classes.title}>جمع خرید من</p>
        {newest.map((glass, index) => (
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
