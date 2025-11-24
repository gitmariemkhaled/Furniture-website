import "./BlogSection.css";
import blog1 from "../assets/b1.jpg";
import blog2 from "../assets/b2.jpg";
import blog3 from "../assets/b3.jpg";

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="section-title">Latest From Our Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src={blog1} alt="Blog 1" />
            <div className="blog-content">
              <h3>How to Choose the Perfect Sofa</h3>
              <p>
                Discover the key factors to consider when selecting a sofa for your space.
                Comfort, size, and material all play an important role.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>

          <div className="blog-card">
            <img src={blog2} alt="Blog 2" />
            <div className="blog-content">
              <h3>Modern Furniture Trends</h3>
              <p>
                Explore the latest furniture trends in 2025 that bring minimalism,
                functionality, and comfort together beautifully.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>

          <div className="blog-card">
            <img src={blog3} alt="Blog 3" />
            <div className="blog-content">
              <h3>Maximizing Small Spaces</h3>
              <p>
                Learn smart layout and design tricks to make every inch of your home useful
                and visually appealing.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
