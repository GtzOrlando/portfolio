import './Body.css';
import profilePic from '../assets/fotoPerfilOGB.png';
import frontendImg from '../assets/ux.png';
import backendImg from '../assets/backend.png';
import databaseImg from '../assets/database-storage.png';
import otherImg from '../assets/web-speed-checking.png';
import gmailImg from '../assets/gmail-logo-2561.svg';
import whatsappImg from '../assets/whatsapp-logo-4456.svg';
import linkedinImg from '../assets/linkedin-logo-2430.svg';
import githubImg from '../assets/github-logo-6532.svg';
import watchIcon from '../assets/eye-plus-outline.svg';
import sourceIcon from '../assets/source-fork.svg';

export default function Body() {
    const skillsItems = [
        { name: "Frontend", href: "https://www.flaticon.com/free-icons/design", img: frontendImg, text: "React, JavaScript, HTML, CSS" },
        { name: "Backend", href: "https://www.flaticon.com/free-icons/backend", img: backendImg, text: "Node.js, Java" },
        { name: "Databases", href: "https://www.flaticon.com/free-icons/database", img: databaseImg, text: "SQL, MySQL" },
        { name: "Others", href: "https://www.flaticon.com/free-icons/optimize", img: otherImg, text: "GitHub, Git, CLI, npm, restful APIs, unit testing" }]

    const contactItems = [
        { name: "Gmail", href: "mailto:gtzb.orlando@gmail.com", img: gmailImg },
        { name: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=526622333561", img: whatsappImg },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/gtzorlando/", img: linkedinImg },
        { name: "Github", href: "https://github.com/GtzOrlando/", img: githubImg }]

    const projectItems = [
        { name: "online-library", hrefdemo: "https://gtzorlando.github.io/online-library", hrefrepo: "https://github.com/GtzOrlando/online-library", text:"You can add, delete and mark books you have read." },
        { name: "sign-up-form", hrefdemo: "https://gtzorlando.github.io/sign-up-form", hrefrepo: "https://github.com/GtzOrlando/sign-up-form", text:"Basic HTML user authentication with mechanism for data validation." },
        { name: "tic-tac-toe", hrefdemo: "https://gtzorlando.github.io/tic-tac-toe", hrefrepo: "https://github.com/GtzOrlando/tic-tac-toe", text:"Play against the computer or a friend." },
        { name: "calculator", hrefdemo: "https://gtzorlando.github.io/calculator", hrefrepo: "https://github.com/GtzOrlando/calculator", text:"Not just a simple calculator, but an advanced one which gives you the preview of the answer before pressing enter." },
        { name: "rock-scissors-paper", hrefdemo: "https://gtzorlando.github.io/rock-scissors-paper", hrefrepo: "https://github.com/GtzOrlando/rock-scissors-paper", text:"Simple game to play to the infinite."},
        { name: "etch-a-sketch", hrefdemo: "https://gtzorlando.github.io/etch-a-sketch", hrefrepo: "https://github.com/GtzOrlando/etch-a-sketch", text:"Just like the classic game, but with a twist. You can change the size of the grid." },]

    return (
        <div className="main__body">
            <div id="about__me">
                <div className="main__image">
                    <img src={profilePic} alt="Placeholder" />
                </div>
                <div className="introduction">
                    <header>
                        <h1>Hi. I'm <strong>Orlando Gutierrez</strong>.</h1>
                        <h2>Software developer</h2>
                    </header>
                        <br />
                        <p><strong>Passionate</strong> about building new stuff<br />and <strong>solving problems</strong> with code.</p>
                        <a href="#skills" className="button">See my skill set</a>
                </div>
            </div>
            <div id="skills">
                <h2>Skillset</h2>
                <p>Here are some of the technologies I've worked with:</p>
                <div className="skills__container">
                {skillsItems.map((item) => (
                        <a className="skills_card" href={item.href} key={item.name}>
                            <h3>{item.name}</h3>
                            <img src={item.img} alt={item.name} className="skills__img" width="80" />
                            <p>{item.text}</p>
                        </a>
                    ))}
                </div>
            </div>
            <div id="projects">
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on:</p>
                <div className="projects__container">
                    {projectItems.map((item) => (
                            <div className="project__card" key={item.name}>
                                <div className='cardContent' >
                                    <div className='cardTitle'>{item.name}</div>
                                    <div className='cardText'>{item.text}</div>
                                    <div className='cardIcons'>
                                        <a href={item.hrefdemo}><img src={watchIcon} alt="Watch" className="cardIcon" width="20" /></a>
                                        <a href={item.hrefrepo}><img src={sourceIcon} alt="Source" className="cardIcon" width="20" /></a>    
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <p>More projects real-life based coming soon!</p>
            </div>
            <div id='contact'>
                <h2>Contact</h2>
                <p>If you want to get in touch, feel free to reach out!</p>
                <div className='contact__container'>
                    {contactItems.map((item) => (
                        <a className="contact_icon" href={item.href} key={item.name}><img src={item.img} alt={item.name} className="contact__img" width="40" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}