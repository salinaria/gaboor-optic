import classes from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

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
      </div>
    </div>
  );
};

export default Login;
