import "./HeroSection.css";
import heroImage from "../assets/slider-img.png"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Dream Furniture</h1>
        <p>
          Explore our wide collection of modern and classic furniture that fits your lifestyle perfectly.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">About Us</button>
          <button className="btn secondary-btn">Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Furniture" />
      </div>
    </section>
  );
};

export default HeroSection;
