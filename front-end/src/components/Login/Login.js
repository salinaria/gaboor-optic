import classes from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import next from "../../assets/next.svg";
import React, { useRef } from "react";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const input1 = useRef();
  const input2 = useRef();
  
  function login() {
    return axios
      .post("http://localhost:8000/api/login/", {
        username: input1.current.value,
        password: input2.current.value,
      })
      .then((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user.data));
        history('/')
        return user;
      })
      .catch((err) => {
        alert("Invalid Username or Password");
      });
  }

  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <p lang="fa" className={classes.title}>ورود</p>
        <div className={classes.form}>
          <p lang="fa">ایمیل</p>
          <input
            ref={input1}
            type="name"
            placeholder=""
            name="email"
            className={classes.box}
          />
          <p lang="fa">رمز عبور</p>
          <input
            ref={input2}
            type="password"
            placeholder=""
            name="password"
            className={classes.box}
          />

          <button lang="fa" onClick={login} className={classes.btn}>
            ورود
          </button>
        </div>
        <a href="/Signup" className={classes.Signup}>
          <p lang="fa">ساخت حساب کاربری</p>
          <img src={next} alt="Signup" />
        </a>
      </div>
    </div>
  );
};

export default Login;
