import Navbar from "../Navbar/Navbar";
import classes from "../Home/Home.module.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.jpg";
import GlassMini from "../Miniglass/Miniglass";

const newest = [
  {
    id: 143,
    name: "Oakley Catalyst Black Red 9272 07",
    sku_id: "catalyst_black_red",
    price: 1.0,
    brand: "Oakley",
    sex: "هردو",
    color: "قرمز",
  },
  {
    id: 121,
    name: "Carrera 119/S Blue Grey T6M HD",
    sku_id: "carrera_119S_blue_gray_gradient",
    brand: "Carrera",
    price: 1.5,
    sex: "زنانه",
    color: "آبی",
  },
  {
    id: 10,
    name: "Ray-Ban Cockpit Sunglasses RB3362 001-56 - Arista Frame  Crystal Green",
    sku_id: "rayban_cockpit_or_vert_classique",
    price: 1.2,
    brand: "RayBan",
    sex: "مردانه",
    color: "سبز",
  },
];
const ferrari = [
  {
    id: 101,
    name: "Rayban Ferrari Bleu",
    sku_id: "rayban_ferrari_blue_bleu_mirror_chromance",
    brand: "RayBan",
    price: 1.0,
    sex: "هردو",
    color: "آبی",
  },
  {
    id: 97,
    name: "Rayban Ferrari Black Silver",
    sku_id: "rayban_ferrari_noir_argent_mirror_chromance",
    brand: "RayBan",
    price: 1.6,
    sex: "مردانه",
    color: "طوسی",
  },
  {
    id: 106,
    name: "Rayban Ferrari Black Gold",
    sku_id: "rayban_ferrari_noir_or_mirror_chromance",
    brand: "RayBan",
    price: 3.3,
    sex: "مردانه",
    color: "مشکی",
  },
];
const Home = () => {
  return (
    <div>
      <Navbar />

      <a
        href="/glass/rayban_clubmasterFleck_havaneNoir_vert"
        className={classes.slide}
      >
        <img className={classes.slide_img} src={slide1} alt="slide" />
      </a>
      <div className={classes.newest}>
        <h1 className={classes.new_text}>جدیدترین عینک‌ها</h1>
        <div className={classes.line}></div>
        <GlassMini array={newest} />
      </div>
      <a
        href="/glass/rayban_ferrari_noir_vert_classique"
        className={classes.slide}
      >
        <img className={classes.slide_img} src={slide2} alt="slide" />
      </a>

      <div className={classes.newest}>
        <h1 className={classes.new_text}>
          کالکشن فراری، ری-بن همکاری بهترین ها
        </h1>
        <div className={classes.line}></div>
        <GlassMini array={ferrari} />
      </div>
    </div>
  );
};

export default Home;
