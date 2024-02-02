import classes from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const history = useNavigate();
  function signin() {
    history("/");
  }
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <p>ثبت نام</p>
        <form className={classes.form}>
          <p>نام</p>
          <input
            type="text"
            placeholder=""
            name="name"
            className={classes.box}
          />
          <p>ایمیل</p>
          <input
            type="email"
            placeholder=""
            name="email"
            className={classes.box}
          />
          <p>رمز عبور</p>
          <input
            type="password"
            placeholder=""
            name="password"
            className={classes.box}
          />
          <p>تکرار رمز عبور</p>
          <input
            type="password"
            placeholder=""
            name="re-password"
            className={classes.box}
          />

          <button type="submit" onClick={signin} className={classes.btn}>
            ساخت حساب
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
