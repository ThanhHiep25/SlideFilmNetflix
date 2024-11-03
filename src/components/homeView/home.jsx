/**==============================================
 * Project 30-10-2024
 * Nguyen Hiep - developer
 * Api - Get and Post (MockAPI)
 *=============================================**/  

import { useEffect, useState } from "react";
import "../../styles/home.css";
import {
  Download,
  Favorite,
  PlayArrow,
  Share,
  VerifiedOutlined,
} from "@mui/icons-material";

const url = "https://654460405a0b4b04436c4cda.mockapi.io/film";

function Home() {
  const [slide, setSlide] = useState([]);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState("1"); // Convert to string for ID comparison
  const [like, setLike] = useState({});
  // fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setSlide(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Không thể tải dữ liệu. Vui lòng thử lại sau.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDotClick = (id) => {
    setActiveSlide(id);
  };

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === String(slide.length) ? "1" : String(Number(prev) + 1)
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === "1" ? String(slide.length) : String(Number(prev) - 1)
    );
  };

  const toggleLike = (id) => {
    setLike((prevLike) => ({
      ...prevLike,
      [id]: !prevLike[id],
    }));
  };
  // dowload
  const handleDownload = () => {
    const activeMovie = slide.find((s) => s.id === activeSlide);
    if (activeMovie) {
      const confirmDownload = window.confirm("Bạn chắc chắn muốn tải xuống?");
      if (confirmDownload) {
        const link = document.createElement("a");
        link.href = activeMovie.image;
        link.download = `movie_img_${activeSlide}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  // Share
  const handleShare = () => {
    const activeMovie = slide.find((s) => s.id === activeSlide);
    if (navigator.share && activeMovie) {
      navigator
        .share({
          title: activeMovie.name,
          text: `Xem thông tin phim "${activeMovie.name}" trên website của chúng tôi!`,      
          url: activeMovie.trailerUrl,
        })
        .then(() => console.log("Đã chia sẻ"))
        .catch((error) => console.error("Không thể chia sẻ", error));
    } else {
      alert("Trình duyệt bạn không hỗ trợ");
    }
  };

  // fomate Date
  const formatDate = (num) => (num < 10 ? `0${num}` : num);
  const date = formatDate(new Date().getDate());
  const month = formatDate(new Date().getMonth() + 1); // Months are 0-indexed
  const year = new Date().getFullYear();

  // Get the active movie information
  const activeMovie = slide.find((s) => s.id === activeSlide);

  // Open & close the movie pop-up
  const handleTrailerOpen = () => {
    setIsTrailerOpen(true);
  };

  const handleTrailerClose = () => {
    setIsTrailerOpen(false);
  };


  return (
    <div
      className="active-slide-info"
      style={{
        backgroundImage: `url(${activeMovie?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="blur"></div>
      <div className="description">
        <h2>
          {activeMovie?.name} <VerifiedOutlined fontSize="large" />
        </h2>
        <p>
          Ngày: {date}-{month}-{year}
        </p>
        <div className="time-des">
          {[
            activeMovie?.time1,
            activeMovie?.time2,
            activeMovie?.time3,
            activeMovie?.time4,
          ].map((time, index) => time && <p key={index}>{time}</p>)}
        </div>
        <div className="title">
          <p>Nhà sản xuất: {activeMovie?.manufacturer}</p>
          <p>Model: {activeMovie?.model}</p>
          <p>Đạo diễn: {activeMovie?.director}</p>
          <p>{activeMovie?.description}</p>
        </div>
        <div className="button-box">
          <button className="viewflim" onClick={handleTrailerOpen}>
            <PlayArrow fontSize="large" />
          </button>
          <button className="share" onClick={handleShare}>
            <Share />
          </button>
          <button className="share" onClick={() => toggleLike(activeSlide)}>
            {like[activeSlide] ? (
              <Favorite fontSize="large" color="error" />
            ) : (
              <Favorite fontSize="large" color="inherit" />
            )}
          </button>
          <button className="download" onClick={handleDownload}>
            <Download /> Tải xuống
          </button>
          {/* Pop-up for trailer */}
          {isTrailerOpen && (
            <div className="trailer-popup">
              <div className="trailer-content">
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
        </div>
      </div>

      <div className="dot-box">
        <div className="container-slide-dot">
          {slide.map((film) => (
            <div
              key={film.id}
              className={`slide ${
                film.id === activeSlide ? "active" : "blurred"
              }`}
              onClick={() => handleDotClick(film.id)}
            >
              <img src={film.image} alt={film.name} />
            </div>
          ))}
        </div>
        <div>
          <button className="prev-button" onClick={prevSlide}>
            ❮
          </button>
          <button className="next-button" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="carousel-dots">
          {slide.map(({ id }) => (
            <span
              key={id}
              className={`dot ${id === activeSlide ? "active" : ""}`}
              onClick={() => handleDotClick(id)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
