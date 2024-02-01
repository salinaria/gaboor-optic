import Navbar from "../Navbar/Navbar";
import classes from "../Home/Home.module.css";
import slide1 from "../../assets/slide1.png";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";
import glass3 from "../../assets/glass3.png";
import glass4 from "../../assets/glass4.jpg";
import glass5 from "../../assets/glass5.jpg";
import next from "../../assets/next.svg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <a href="/mega" className={classes.slide}>
        <img className={classes.slide_img} src={slide1} alt='slide' />
      </a>
      <div className={classes.newest}>
        <h1 className={classes.new_text}>جدیدترین عینک‌ها</h1>
        <div className={classes.line}></div>
        <div className={classes.newest_container}></div>
      </div>
    </div>
  );
};

export default Home;
