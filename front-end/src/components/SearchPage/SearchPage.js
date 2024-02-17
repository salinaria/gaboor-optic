import Navbar from "../Navbar/Navbar";
import classes from "../SearchPage/SearchPage.module.css";
import axios from "axios";
import React, {useState, useEffect } from "react";
import { useParams } from "react-router";
import WideGlass from "../WideGlass/WideGlass";

const SearchPage = () => {
  let slug = useParams();

  const [Data, setData] = useState([
    {
      sku_id: "",
      name: "",
      image: "",
      brand: "",
      sex: "",
      price: 0,
      color: "",
      recommended: [], 
    },
  ]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/glass/?search=" + String(slug.search))
      .then((response) => setData(Object.values(response.data)));
  }, [slug.search]);

  return (
    <div>
      <Navbar />
      <h1 className={classes.find}>نتایج جستجوی</h1>
      <h1 className={classes.prompt}>{slug.search}</h1>
      <div className={classes.line}></div>
      <div className={classes.results}>
        {Data.map((glass, index) => (
          <WideGlass array={glass} basket = {false} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
