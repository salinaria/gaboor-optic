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
      <div className={classes.dropdown}>
        <p className={classes.brand_text}>برند‌ها</p>
        <img src={brands} className={classes.brands} alt="icon" />
        <div className={classes.dropdown_content}>
          <div>
            <p>Ray Ban</p>
            <p>Carrera</p>
            <p>Oakley</p>
          </div>
          <div>
            <p>Persol</p>
            <p>Polaried</p>
            <p>AliExpress</p>
          </div>
        </div>
      </div>
      <img src={search} className={classes.search} alt="icon" />
    </div>
  );
};

export default Navbar;
