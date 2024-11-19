import { useLocation } from "react-router-dom";
import "../../styles/ticket.css";
import { ConfirmationNumber } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const url = "https://654460405a0b4b04436c4cda.mockapi.io/film";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabel(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function Ticket() {
  const location = useLocation();
  const flim = location.state?.film;
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const pricesale = flim.price - (flim.price * (20 / 100));
  const [state, seState] = useState([])

  const fetchApi = async() =>{
      try {
        const reponse = await fetch(url)
        if (!reponse.ok) throw new Error("Network response was not ok");
        const data = await reponse.json();
        seState(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }

  useEffect(() => {
    fetchApi();
  }, [])

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
                  <ConfirmationNumber />{pricesale} VND
                </p>
                <span>{flim.price} VND</span> <span><i>20%</i></span>
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
            {state.map(state =>(
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
          <div className="rating-box">
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.5}
              getLabelText={getLabel}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <p className="text-rating">
                {labels[hover !== -1 ? hover : value]}
              </p>
            )}
          </div>
          <div className="review-box">
            <h3>Đánh giá của bạn</h3>
            <textarea placeholder="Nhập đánh giá của bạn" />
            <button className="btn-review">Gửi đánh giá</button>
          </div>
        </div>
      ) : (
        <p>No flim selected</p>
      )}
    </div>
  );
}

export default Ticket;
