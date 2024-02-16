import classes from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import next from "../../assets/next.svg";
import React, { useRef } from "react";
import axios from "axios";

const Signup = () => {
  const history = useNavigate();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  function signup() {
    if (input3.current.value === input4.current.value) {
      let flagReq = true;
      return axios
        .post("http://localhost:8000/api/profile/", {
          username: input1.current.value,
          email: input2.current.value,
          password: input3.current.value,
        })
        .catch((err) => {
          alert("This Email is already registered");
          flagReq = false;
        })
        .then((flagReq) => {
          if (flagReq) {
            history("/Login");
          }
        });
    } else {
      alert("Passwords does'nt match");
    }
  }
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <p className={classes.title}>ثبت نام</p>
        <div className={classes.form}>
          <p>نام</p>
          <input
            ref={input1}
            type="text"
            placeholder=""
            name="name"
            className={classes.box}
          />
          <p>ایمیل</p>
          <input
            ref={input2}
            type="email"
            placeholder=""
            name="email"
            className={classes.box}
          />
          <p>رمز عبور</p>
          <input
            ref={input3}
            type="password"
            placeholder=""
            name="password"
            className={classes.box}
          />
          <p>تکرار رمز عبور</p>
          <input
            ref={input4}
            type="password"
            placeholder=""
            name="re-password"
            className={classes.box}
          />

          <button onClick={signup} className={classes.btn}>
            ساخت حساب
          </button>
        </div>
        <a href="/Login" className={classes.Signup}>
          <p>حساب دارم! ورود</p>
          <img src={next} alt="Login" />
        </a>
      </div>
    </div>
  );
};

export default Signup;
