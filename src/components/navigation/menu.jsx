/**-----------------------------------------------------------------------------------------------------------------------
 **                                                     MENU
 create by Nguyen Hiep 5/11/2024
 *-----------------------------------------------------------------------------------------------------------------------**/

import { Link } from "react-router-dom";
import "../../styles/menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <ul>
        <li>Trang chủ</li>
        <Link to="/flim-list">
          <li>Danh sách trailer</li>
        </Link>
        <li>Sắp ra mắt</li>
      </ul>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Menu;
