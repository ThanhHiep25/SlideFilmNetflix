import { Avatar } from "@mui/material";
import "../../styles/login.css";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-login">
      <div className="box-login-blur">
        <div className="box-av">
          <Avatar className="avatar-login" />
        </div>
        <p className="title-login">Đăng nhập</p>
        <form action="" className="form-login">
          <div className="lable-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="lable-box">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" required />
          </div>
          <p>---------- Or ----------</p>
          <div className="box-logo-login">
            <span>
              <Google fontSize="large" />
            </span>
            <span>
              <Facebook fontSize="large" color="primary" />
            </span>
            <span>
              <Twitter fontSize="large" color="primary" />
            </span>
          </div>
          <div className="button-box">
            <Link to={"/register"}>
              <button className="btn-lgin">Đăng ký </button>
            </Link>
            <button className="btn-lgin">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
