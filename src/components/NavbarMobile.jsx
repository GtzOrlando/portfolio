import NavbarLinks from "./NavbarLinks.jsx";
import './NavbarMobile.css';

export default function NavbarMobile() {

    return (
        <div className="mobile-navbar">
            <label className='hamburger-menu'>
                <input type='checkbox' />
            </label>
            <div className='sidebar'>
                <NavbarLinks />
            </div>
        </div>
    )
}