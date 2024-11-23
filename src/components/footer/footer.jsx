import { Facebook, Google, Twitter, Verified } from "@mui/icons-material";
import "../../styles/footer.css";

function Footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="footer-box">
          <div className="footer-details">
            <p>Thông tin</p>
            <p>Giới thiệu</p>
            <span>
              SLIDE NEXTFLIM là nơi cung cấp vé phim và xem trước những đoạn
              trailer, nơi mà bạn có thể tìm thấy các bộ phim mà ban mong muốn
              nhất. Chúng tôi cam kết vé phim hoàn toàn phù hợp và đúng quy
              định, giá cả cạnh tranh trên thị trường. Chúng tôi cung cấp các
              dịch vụ và ưu đãi phù hợp với bạn.
            </span>
            <p>Sơ đồ website</p>
            <span></span>
            <p>Liên hệ</p>
            <span>
              Email : <strong>contactslideNF@Flim.com</strong>
            </span>
          </div>
          <div className="contact-box">
            <div className="social-box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Google />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </div>
            <div className="contact-box">
              <p>Liên hệ</p>
              <a href="#">Email: 123@example.com</a>
              <a href="#">Phone: 0987654321</a>
            </div>
            <div className="newsletter-box">
              <p>Đăng ký nhận tin tức</p>
              <input type="text" placeholder="Nhập email của bạn" />
              <button className="btn-newsletter">Đăng ký</button>
            </div>
          </div>
          <div className="payment-box">
            <div className="Verify">
              <p>
                <Verified fontSize="large" /> Đã được phê duyệt
              </p>
            </div>
            <div className="paymentcard">
              <img src="../../../public/visa.png" alt="Payment" />
              <img src="../../../public/card.png" alt="Payment" />
              <img src="../../../public/social.png" alt="Payment" />
              <img src="../../../public/apple-pay.png" alt="Payment" />
              <img src="../../../public/momo_icon.png" alt="Payment" />
            </div>
          </div>
        </div>
        <div className="footer-content">
          <p>@copy 2024 NGUYENHIEP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
