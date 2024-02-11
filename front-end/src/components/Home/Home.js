import Navbar from "../Navbar/Navbar";
import classes from "../Home/Home.module.css";
import slide1 from "../../assets/slide1.png";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";
import glass3 from "../../assets/glass3.png";
import GlassMini from "../Miniglass/Miniglass";

const newest = [
  { image: glass1, name: "Aviator", brand: "Ray Ban", price: "1,400", link:'/glass/aviator' },
  { image: glass2, name: "Aviator", brand: "Ray Ban", price: "1,300", link:'/glass/aviator' },
  { image: glass3, name: "Aviator", brand: "Ray Ban", price: "1,800", link:'/glass/aviator' },
];
const Home = () => {
  return (
    <div>
      <Navbar />

      <a href="/glass/mega" className={classes.slide}>
        <img className={classes.slide_img} src={slide1} alt="slide" />
      </a>
      <div className={classes.newest}>
        <h1 className={classes.new_text}>جدیدترین عینک‌ها</h1>
        <div className={classes.line}></div>
        <GlassMini array={newest} />
      </div>
    </div>
  );
};

export default Home;
