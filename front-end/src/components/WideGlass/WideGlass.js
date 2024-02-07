import classes from "../WideGlass/WideGlass.module.css";

const WideGlass = (props) => {
  return (
    <div className={classes.GlassMini}>
      <a href={props.array.link} className={classes.link}>
        <img
          id="image"
          src={props.array.image}
          className={classes.image}
          alt="glassImage"
        />
      </a>
      <div className={classes.info}>
        <h1>{props.array.name}</h1>
        <h1>{props.array.brand}</h1>
        <h1>{props.array.price}</h1>
      </div>
    </div>
  );
};

export default WideGlass;
