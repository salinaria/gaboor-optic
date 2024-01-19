import classes from "../Navbar/Navbar.module.css";
import user from "../../assets/user.svg";
import basket from "../../assets/basket.svg";
import brands from "../../assets/brands.svg";
import search from "../../assets/search.svg";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <img src={basket} className={classes.basket} alt="icon" />
        <hr className={classes.hr} />
        <img src={user} className={classes.user} alt="icon" />
      </div>
      <img src={brands} className={classes.brands} alt="icon" />
      <img src={search} className={classes.search} alt="icon" />
    </div>
  );
};

export default Navbar;
