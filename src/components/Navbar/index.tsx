import { Link } from 'react-router-dom';
import Mascote from '../../assets/images/wally.png';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="navbar-container">
        <div className="navbar-image">
          <Link to="/">
            <img src={Mascote} alt="Mascote da Itegra" />
          </Link>
        </div>
        <Link to="/">
          <h4>ITEGRAFLIX</h4>
        </Link>
      </div>
    </nav>
  );            
}

export default Navbar;