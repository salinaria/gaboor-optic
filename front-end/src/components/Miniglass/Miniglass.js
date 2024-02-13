import classes from "../Miniglass/Miniglass.module.css";

const GlassMini = (props) => {
  return (
    <div className={classes.GlassMini}>
      {props.array.map((glass, index) => (
        <a href={'http://localhost:3000/glass/'+glass.sku_id} className={classes.link}>
          <img id = 'image' src={"http://127.0.0.1:8000/store/store/images/" + glass.sku_id + '.jpg'} className={classes.image} alt="glassImage" />
          <div className={classes.info}>
            <h1>{glass.name.substring(0, 15)}</h1>
            <h1>{glass.brand}</h1>
            <h1>{glass.price}00</h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GlassMini;
