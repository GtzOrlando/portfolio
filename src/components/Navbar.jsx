import ThemeSelect from "./ThemeSelect.jsx";
import './Navbar.css';
import logoOGB from '../assets/logoOGB.svg';
import NavbarLinks from "./NavbarLinks.jsx";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a href="#about" className="navbar__logo">
                    <img src={logoOGB} className="logo" alt="Orlando's logo" height="40" /></a>
                <ThemeSelect />
            </div>

            <div className="navbar__right">    
                <NavbarLinks />
            </div>
        </nav>
    );
}