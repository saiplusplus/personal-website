import { useState, useEffect} from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const loc = document.location;
    const isHomePage = loc.pathname === "/";
    const isMePage = loc.pathname ==="/me";

    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById("AboutMe");
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    useEffect(() => {
        if (!isHomePage) {
            scrollToAboutMe();
        }
    }, [document.location]); // Trigger when location changes
    
    
    return (
        <nav className={`navbar ${navActive? "active" : ""}`}> 
        <div className="navbar--logo">
            <a href="/" onClick={closeMenu}>
                <img src="./img/saiLogo.png" alt="logo" width="100"></img>
            </a>
        </div>
        <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
        </a>

        <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    {!isHomePage ? (
                        <a href="/" className="navbar--content"> Home </a>
                    ) : 
                    <Link 
                    onClick={closeMenu} 
                    activeClass="navbar--active-content" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    to="heroSection" 
                    className="navbar--content">
                        Home
                    </Link>}

                </li>
                <li>
                    {!isHomePage ? (
                        <a href="/about" className="navbar--content" onClick={closeMenu}>About Me</a>
                    ) : 
                    <Link 
                    onClick={closeMenu} 
                    activeClass="navbar--active-content" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    to="AboutMe" 
                    className="navbar--content">
                        About Me
                    </Link>
                    }

                </li>
                <li>
                    {!isHomePage ? (
                        <a href="/projects" className="navbar--content" onClick={closeMenu}>Portfolio</a>
                    ) : 
                    <Link 
                    onClick={closeMenu} 
                    activeClass="navbar--active-content" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    to="MyPortfolio" 
                    className="navbar--content">
                        Portfolio
                    </Link>
                    }
                </li>
                {/* <li>
                    <a href="/sai-productions" onClick={closeMenu} className="navbar--content">
                        The Sai Company
                    </a>
                </li> */}
            </ul>
        </div>
        <Link 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="ContactMe" 
                className="btn btn-outline-primary">
                    Contact Me
        </Link>
        </nav>
    )

    
}

export default Navbar;