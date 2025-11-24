import "./AboutSection.css";
import aboutImg from "../assets/about-img.png";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Us</h2>
          <p>
            We are passionate about creating modern, functional, and stylish furniture 
            that transforms your home. Our designs combine quality craftsmanship 
            with innovative ideas to provide comfort and elegance in every piece.
          </p>
          <p>
            Whether you're decorating a cozy apartment or a spacious villa, 
            we are here to help you bring your vision to life.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
