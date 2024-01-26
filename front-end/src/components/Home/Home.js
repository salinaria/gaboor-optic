import Navbar from "../Navbar/Navbar";
import classes from "../Home/Home.module.css";
import GlassMini from "../GlassMini/GlassMini";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";
import glass3 from "../../assets/glass3.png";
import next from "../../assets/next.svg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className={classes.new_text}>جدیدترین عینک‌ها</h1>;
      <div className={classes.line}></div>
      <div className={classes.newest}>
        <GlassMini
          image={glass1}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
        <GlassMini
          image={glass2}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
        <GlassMini
          image={glass3}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
        <a href="/trends" className={classes.next}>
          <p className={classes.next_text}>مشاهده همه</p>
          <img className={classes.next_img} src={next} alt="trends" />
        </a>
      </div>
    </div>
  );
};

export default Home;
