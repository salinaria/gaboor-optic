import classes from "../Miniglass/Miniglass.module.css";

const GlassMini = (props) => {
  return (
    <div className={classes.GlassMini}>
      {props.array.map((glass, index) => (
        <a href={glass.link} className={classes.link}>
          <img id = 'image' src={glass.image} className={classes.image} alt="glassImage" />
          <div className={classes.info}>
            <h1>{glass.name}</h1>
            <h1>{glass.brand}</h1>
            <h1>{glass.price}</h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GlassMini;
