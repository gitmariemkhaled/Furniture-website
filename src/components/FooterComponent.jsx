import "./FooterComponent.css";
import imgf1 from "../assets/f1.png";
import imgf2 from "../assets/f2.png";
import imgf3 from "../assets/f3.png";
import imgf4 from "../assets/f4.png";
import imgf5 from "../assets/f5.png";
import imgf6 from "../assets/f6.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <div>
  <i className="fa-solid fa-phone footer-icon"></i>
  <span>Call: +01 1234567890</span>
</div>
<div>
  <i className="fa-solid fa-envelope footer-icon"></i>
  <span>Email: demo@gmail.com</span>
</div>
<div>
  <i className="fa-solid fa-location-dot footer-icon"></i>
  <span>Location</span>
</div>

        </div>

        <div className="footer-content">
         
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Furniture</li>
              <li>Contact Us</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>

         
          <div className="footer-column">
            <h3>Instagram Feeds</h3>
            <div className="footer-images">
              <img src={imgf1} alt="feed" />
              <img src={imgf2} />
              <img src={imgf3} />
              <img src={imgf4} />
              <img src={imgf5} />
              <img src={imgf6} />
            </div>
          </div>

        
          <div className="footer-column">
            <h3>Sign Up To Our Newsletter</h3>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
</div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
