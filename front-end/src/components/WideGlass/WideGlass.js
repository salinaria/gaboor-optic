import classes from "../WideGlass/WideGlass.module.css";
import deleteImage from "../../assets/delete.svg";

const WideGlass = (props) => {
  return (
    <div className={classes.GlassMini}>
      <a
        href={"http://localhost:3000/glass/" + props.array.sku_id}
        className={classes.link}
      >
        <img
          id="image"
          src={
            "http://127.0.0.1:8000/store/store/images/" +
            props.array.sku_id +
            ".jpg"
          }
          className={classes.image}
          alt="glassImage"
        />
      </a>
      <div className={classes.info}>
        <h1>{props.array.name.substring(0, 70)}</h1>
        <h1>{props.array.brand}</h1>
        <h1>{props.array.price}00</h1>
        <div className={classes.delete}>
          <p>حذف</p>
          <img src={deleteImage} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default WideGlass;
