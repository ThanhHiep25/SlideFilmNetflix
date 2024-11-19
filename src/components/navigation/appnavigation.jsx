import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../homeView/home";
import Login from "../login/login";
import Register from "../register/register";
import FlimList from "../flimList/filmList";
import Ticket from "../ticketDetails/ticket";
function Appnavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flim-list" element={<FlimList />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default Appnavigation;
