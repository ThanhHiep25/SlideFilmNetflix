import { useLocation } from "react-router-dom";
import "../../styles/ticket.css";
import { ConfirmationNumber } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Comment from "../comment/comment";

const url = "https://654460405a0b4b04436c4cda.mockapi.io/film";



function Ticket() {
  const location = useLocation();
  const flim = location.state?.film;
  const pricesale = flim.price - flim.price * (20 / 100);
  const [state, seState] = useState([]);

  const fetchApi = async () => {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) throw new Error("Network response was not ok");
      const data = await reponse.json();
      seState(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container-wrapper-ticketDetails">
      {flim ? (
        <div className="content-wrapper-ticketDetails">
          <div className="rowticketDetails">
            <img src={flim.image} alt={flim.name} />
            <div className="content-ticketDetails">
              <p>{flim.name}</p>
              <p>Đạo diễn: {flim.director}</p>
              <p>Nhà sản xuất: {flim.manufacturer}</p>
              <p>{flim.description}</p>
              <div className="sale-ticket">
                <p>
                  <ConfirmationNumber />
                  {pricesale} VND
                </p>
                <span>{flim.price} VND</span>{" "}
                <span>
                  <i>20%</i>
                </span>
              </div>

              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <button className="btn-ticket">Đặt Vé Ngay</button>
              </div>
            </div>
          </div>
          <h2>Gợi ý cho bạn phim hay: </h2>
          <div className="suggestFlim">
            {state.map((state) => (
              <div className="suggestFlim-cart" key={state.id}>
                <img src={state.image} alt={state.name} />
                <div className="suggestFlim-context">
                  <p>{state.name}</p>
                  <p>Nhà sản xuất: {state.manufacturer}</p>
                  <p>{state.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No flim selected</p>
      )}
      <Comment/>
      <Footer />
    </div>
  );
}

export default Ticket;
