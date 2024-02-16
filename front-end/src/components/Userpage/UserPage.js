import Navbar from "../Navbar/Navbar";
import classes from "../Userpage/UserPage.module.css";
import hello from "../../assets/hello.svg";
import next from "../../assets/next.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UserPage = () => {
  const [Data, setData] = useState({
    username: "",
    email: "",
  });

  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };

  function signoutf() {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }
  const customHeader = () => ({
    headers: {
      "content-type": "application/json",
      Authorization: "Token " + currentUser().token,
    },
    validateStatus: (status) => status === 200,
  });
  useEffect(() => {
    const requestOptions = customHeader();
    axios
      .get("http://127.0.0.1:8000/api/account", requestOptions)
      .then((response) => setData(response.data[0]));
  }, []);
  return (
    <div>
      <Navbar />
      <div className={classes.welcome}>
        <img src={hello} alt="hello" />
        <p>سلام</p>
        <p>{Data.username}</p>
      </div>
      <div className={classes.change}>
        <img src={next} alt="next" />
        <p>تغییر نام</p>
      </div>
      <div className={classes.change}>
        <img src={next} alt="next" />
        <p>تغییر ایمیل</p>
      </div>
      <div className={classes.change}>
        <img src={next} alt="next" />
        <p>تغییر رمز عبور</p>
      </div>
      <button onClick={signoutf} className={classes.change}>
        <img src={next} alt="next" />
        <p>خروج</p>
      </button>
      
      <div className={classes.purchase}>
        <h1 className={classes.pur_text}>خرید‌های شما</h1>
        <div className={classes.line}></div>
        <div className={classes.pur_container}></div>
      </div>
    </div>
  );
};

export default UserPage;
