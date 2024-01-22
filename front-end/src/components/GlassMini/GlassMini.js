import classes from "../GlassMini/GlassMini.module.css";

const GlassMini = (props) => {
  return (
    <div className={classes.GlassMini}>
      <img src={props.image} className={classes.image} alt="glassImage" />
      <div className={classes.info}>
        <h1>{props.name}</h1><h1>{props.brand}</h1><h1>{props.price}</h1>;
      </div>
    </div>
  );
};

export default GlassMini;
