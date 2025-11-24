import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">NEWHOME</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#furniture">Furnitures</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
