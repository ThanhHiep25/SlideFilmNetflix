import { Avatar } from "@mui/material";
import "../../styles/register.css"

function Register() {
  return (
    <div className="container-register">
      <div className="register-box">
        <div className="box-av">
          <Avatar className="avatar-register" />
        </div>

        <p className="title-register">Đăng ký</p>
        <form action="" className="form-register">
          <div className="lable-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="lable-box">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="lable-box">
            <label htmlFor="password">Nhập lại mật khẩu</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="button-box">
            <button className="btn-register">Đăng ký </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
