import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <nav>
        <span>My Website</span>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/user'>User</NavLink>
      </nav>
    </div>
  );
};

export default Header;
