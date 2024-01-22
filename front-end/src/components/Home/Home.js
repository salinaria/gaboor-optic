import Navbar from "../Navbar/Navbar";
import classes from "../Home/Home.module.css"
import GlassMini from "../GlassMini/GlassMini";
import glass1 from "../../assets/glass1.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>;
      <div className={classes.newest}>
        <GlassMini
          image={glass1}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
        <GlassMini
          image={glass1}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
        <GlassMini
          image={glass1}
          name="Aviator Classic"
          brand="Ray Ban"
          price="۱.۴۰۰"
        />
      </div>
    </div>
  );
};

export default Home;
