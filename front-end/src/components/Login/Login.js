import classes from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import next from '../../assets/next.svg'

const Login = () => {
  const history = useNavigate();
  function login() {
    history("/");
  }
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <p>ورود</p>
        <form className={classes.form}>
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

          <button type="submit" onClick={login} className={classes.btn}>
            ورود
          </button>
        </form>
        <a href="/Signin" className={classes.signin}>
          <p>ساخت حساب کاربری</p>
          <img src = {next} alt="signin"/>
        </a>
      </div>
    </div>
  );
};

export default Login;
