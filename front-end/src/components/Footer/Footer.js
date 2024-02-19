import brand from "../../assets/brands.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={classes.line}></div>
      <div className={classes.footer}>
        <a href="./" className={classes.name}>
          <img src={brand} alt="brand" />
          <p>© 2024 Gaboor Optic</p>
        </a>
        <a href="https://github.com/salinaria" className={classes.author}>
          Designed by Ali Ansari
        </a>
        <a href="mailto:a.ansari3103@gmail.com" className={classes.author}>Contact us</a>
      </div>
    </div>
  );
};

export default Footer;
