import { useState } from "react";
import { Rating } from "@mui/material";
import "../../styles/comment.css";
import { Diamond } from "@mui/icons-material";
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
function Coment() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <div className="container-comment">
      <h2>Đánh giá & review phim: </h2>
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
          <p className="text-rating">{labels[hover !== -1 ? hover : value]}</p>
        )}
      </div>
      <div className="review-box">
        <h3>Đánh giá của bạn</h3>
        <textarea placeholder="Nhập đánh giá của bạn" cols={50} />
        <button className="btn-review">Gửi đánh giá</button>
      </div>

      <div className="review-list">
        <h3>Danh sách đánh giá:</h3>
        <div className="review-item">
          <div className="review-user">
            <img src="https://via.placeholder.com/100x100" alt="user" />
            <div className="userreview">
              <div className="row-review">
                <span>User 1</span>
                <span><Diamond fontSize="small"/> VIP</span>
              </div>
              <span>2022-01-01</span>
            </div>
          </div>
          <div className="review-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod elementum velit, ut viverra purus facilisis ac. Sed non
              diam at justo ultricies gravida. Sed auctor, arcu in pulvinar
              fringilla, metus risus cursus ligula, vitae ultricies diam velit
              id ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coment;
