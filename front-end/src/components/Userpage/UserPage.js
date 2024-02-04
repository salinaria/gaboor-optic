import Navbar from "../Navbar/Navbar";
import classes from "../Userpage/UserPage.module.css";
import hello from "../../assets/hello.svg";
import next from "../../assets/next.svg";
const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.welcome}>
        <img src={hello} alt="hello" />
        <p>سلام</p>
        <p>!Ali </p>
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
      <div className={classes.purchase}>
        <h1 className={classes.pur_text}>خرید‌های شما</h1>
        <div className={classes.line}></div>
        <div className={classes.pur_container}></div>
      </div>
    </div>
  );
};

export default UserPage;
