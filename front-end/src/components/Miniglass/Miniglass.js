import classes from "../Miniglass/Miniglass.module.css";
import next from "../../assets/next.svg";

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
      <div className={classes.next}> 
        <img src={next} alt="next"/>
      </div>
    </div>
  );
};

export default GlassMini;
