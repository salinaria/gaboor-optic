import Navbar from "../Navbar/Navbar";
import classes from "../SearchPage/SearchPage.module.css"
import GlassMini from "../GlassMini/GlassMini";
import { useParams } from "react-router";

const SearchPage = () => {
  let slug = useParams();
  return (
    <div>
      <Navbar />
      <h1 className={classes.find}>{slug.search} نتیجه جستجوی </h1>;
      <div className={classes.line}></div>
    </div>
  );
};

export default SearchPage;