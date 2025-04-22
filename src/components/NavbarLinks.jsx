export default function NavbarLinks() {
    const navbarItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },]
    return (  
        <ul className="navbar__links">
            {navbarItems.map((item) => (
                <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
}