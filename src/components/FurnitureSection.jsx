import "./FurnitureSection.css";
import FurnitureCard from "./FurnitureCard";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f4.png";
import img5 from "../assets/f5.png";
import img6 from "../assets/f6.png";

const FurnitureSection = () => {
  return (
    <section className="furniture-section" id="furniture">
      <div className="furniture-container">
        <h2 className="section-title">Our Furniture Collection</h2>
        <div className="furniture-grid">
          <FurnitureCard
            image={img1}
            title="Modern Sofa"
            description="Comfortable and stylish sofa for your living room."
          />
          <FurnitureCard
            image={img2}
            title="Wooden Chair"
            description="Elegant wooden chair made from premium oak."
          />
          <FurnitureCard
            image={img3}
            title="Dining Table"
            description="Perfect table for family gatherings."
          />
          <FurnitureCard
            image={img4}
            title="King Bed"
            description="Sleep comfortably on this elegant king-sized bed."
          />
          <FurnitureCard
            image={img5}
            title="Lamp"
            description="Stylish lamp for your bedroom or living area."
          />
          <FurnitureCard
            image={img6}
            title="Cabinet"
            description="Modern storage cabinet with clean design."
          />
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
