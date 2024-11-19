import { useEffect, useState } from "react";
import "../../styles/flimList.css";
import {
  ConfirmationNumber,
  FiberSmartRecord,
  FilterList,
  PlayArrow,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const url = "https://654460405a0b4b04436c4cda.mockapi.io/film";

function FilmList() {
  const [films, setFilms] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrailerOpen, setTrailerOpen] = useState(false);
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const navigation = useNavigate();

  // Hàm fetch phim từ API
  const fetchFlim = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchFlim();
  }, []);

  // Tự động chuyển slide sau 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === films.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 giây

    return () => clearInterval(interval);
  }, [films]);

  // Hàm chuyển đến slide trước
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? films.length - 1 : currentIndex - 1);
  };

  // Hàm chuyển đến slide kế tiếp
  const nextSlide = () => {
    setCurrentIndex(currentIndex === films.length - 1 ? 0 : currentIndex + 1);
  };

  const activeMovie = films.find((f) => f.id === selectedFilmId);

  // OpenTrailer

  const handleTrailerOpen = (flimID) => {
    setSelectedFilmId(flimID);
    setTrailerOpen(true);
  };

  const handleTrailerClose = () => {
    setTrailerOpen(false);
    setSelectedFilmId(null);
  };

  return (
    <div className="container-flimList">
      <div className="header-box">
        <div className="title-logo">
          <span>N</span>
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>F</span>
          <span>L</span>
          <span>I</span>
          <span>M</span>
          <FiberSmartRecord fontSize="large" color="info" />
        </div>

        <div className="avatar-profile">
          <img src="" alt="" />
          <p>, Nguyen</p>
        </div>
      </div>

      <div className="flim">
        {films.map((film, index) => (
          <img
            src={film.image}
            alt={film.name}
            className={`flim ${index === currentIndex ? "active" : ""}`}
            key={film.id}
          />
        ))}
      </div>

      <div className="buttonPN">
        {/* Nút điều hướng */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <main className="body-flim">
        <div className="filterFlim">
          <div className="selectFilter-box">
            <label htmlFor="filter">
              <FilterList /> Bạn đang phân vân tìm phim :
            </label>
            <select id="filter">
              <option value="all">Tất cả phim</option>
              <option value="drama">Phim nổi bật nhất ✨</option>
              <option value="action">Phim hành động</option>
              <option value="comedy">Phim hài</option>
              <option value="thriller">Phim thriller</option>
              <option value="animation">Phim hoạt hình</option>
              <option value="documentary">Phim tài liệu</option>
            </select>
          </div>
        </div>
        <div className="wapper-box">
          {films.map((film) => (
            <div className="cartFlim" key={film.id}>
              <img src={film.image} alt={film.name} />
              <div className="contentFlim">
                <p>{film.name}</p>
                <p>Đạo diễn: {film.director}</p>
                <p>{film.description}</p>
              </div>

              <div className="button-box-flim">
                <p
                  className="viewflimList"
                  onClick={() => {
                    handleTrailerOpen(film.id);
                  }}
                >
                  <PlayArrow fontSize="large" />
                </p>
                <p
                  className="viewTicket"
                  onClick={() => {navigation("/ticket", {state:{film}})
                  }}
                >
                  <ConfirmationNumber /> Xem Chi tiết vé
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Pop-up for trailer */}
        {isTrailerOpen && (
          <div className="trailer-popup-flim">
            <div className="trailer-content-flim">
              <button onClick={handleTrailerClose}>Close</button>
              <iframe
                width="1000"
                height="550"
                src={activeMovie?.trailerUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default FilmList;
