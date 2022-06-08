import Mascote from '../../assets/images/wally.png';
import './style.css';

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="navbar-container">
        <div className="navbar-image">
          <a href="link">
            <img src={Mascote} alt="Mascote da Itegra" />
          </a>
        </div>
        <a href="link">
          <h4>ITEGRAFLIX</h4>
        </a>
      </div>
    </nav>
  );            
}

export default Navbar;