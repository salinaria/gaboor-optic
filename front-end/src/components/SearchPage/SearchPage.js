import Navbar from "../Navbar/Navbar";
import classes from "../SearchPage/SearchPage.module.css";
import { useParams } from "react-router";

const SearchPage = () => {
  let slug = useParams();
  return (
    <div>
      <Navbar />
      <h1 className={classes.find}>نتایج جستجوی</h1>
      <h1 className={classes.prompt}>{slug.search}</h1>
      <div className={classes.line}></div>
    </div>
  );
};

export default SearchPage;
