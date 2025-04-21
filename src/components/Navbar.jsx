import ThemeSelect from "./ThemeSelect.jsx";
import './Navbar.css';
import logoOGB from '../assets/logoOGB.svg';

export default function Navbar() {
    const navbarItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },]
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a href="#about" className="navbar__logo">
                    <img src={logoOGB} className="logo" alt="Orlando's logo" height="40" /></a>
                <ThemeSelect />
            </div>

            <div className="navbar__right">    
                <ul className="navbar__links">
                    {navbarItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}