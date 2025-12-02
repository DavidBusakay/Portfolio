import { NavLink } from "react-router-dom"
import { Button, Container, Image, Navbar, Offcanvas } from "react-bootstrap"
import Logo from "../assets/img/david-busakay-profil.webp"
import { useEffect, useState } from "react"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    useEffect(() => { 
        const handleScroll = () => {
            const navLinks = document.querySelectorAll(".navigation .nav-link")
            const sections = document.querySelectorAll("section")
            const homeMenu = document.getElementById("homeMenu")
            const scrollPos = window.scrollY || document.documentElement.scrollTop

            sections.forEach(section => {
                const top = section.offsetTop
                const bottom = top + section.offsetHeight
                const currentId = section.getAttribute("id")

                if (scrollPos >= top - 200 && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        if (scrollPos <= section.offsetHeight - 1) {
                            homeMenu.classList.add("active")
                        }
                        link.classList.remove("active")
                    });
                    const navLink = document.querySelector(`.navigation a[href="#${currentId}"]`)
                    if (navLink) {
                        navLink.classList.add("active")
                    }
                }
            });
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    return (
        <header>
            <Navbar variant="expand-lg" className="position-fixed w-100 px-3 z-3" expand="lg" collapseOnSelect>
                <Container className="rounded-5 d-flex justify-content-between align-items-center my-2 px-lg-5 px-md-3 px-sm-2 py-2 navigation">
                    <NavLink to={"/"} className="navbar-brand">
                        <div className="wrapper-logo">
                            <Image
                                src={Logo}
                                className="logo"
                                alt="Logo"
                            />
                        </div>
                    </NavLink>
                    <button
                        type="button"
                        className="navbar-toggler"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="true"
                        aria-label="Menu"
                        data-bs-theme="dark"
                        onClick={() => setShowMenu(true)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <Offcanvas
                        show={showMenu}
                        onHide={() => setShowMenu(false)}
                        placement="start"
                        responsive="lg"
                    >
                        <Offcanvas.Header
                            style={{ backgroundColor: "var(--body-color)" }}
                            closeButton
                            closeVariant="white"
                        >
                            <NavLink to={"/"} className="navbar-brand">
                                <div className="wrapper-logo">
                                    <Image
                                        src={Logo}
                                        className="logo"
                                        alt="Logo"
                                    />
                                </div>
                            </NavLink>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ backgroundColor: "var(--body-color)" }}>
                            <ul className="custom-navbar navbar-nav justify-content-end flex-grow-1 gap-lg-4 gap-mb-0 gap-0 align-items-center">
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link" id="homeMenu">Accueil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a href="#aboutMe" className="nav-link text-nowrap" id="aboutMenu" onClick={(e) => {
                                        e.preventDefault()
                                        setShowMenu(false)
                                        document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" })
                                    }}>A propos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolio" className="nav-link" id="portfolioMenu" onClick={(e) => {
                                        e.preventDefault()
                                        setShowMenu(false)
                                        document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })
                                    }}>Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#competences" className="nav-link" id="skillsMenu" onClick={(e) => {
                                        e.preventDefault()
                                        setShowMenu(false)
                                        document.getElementById("competences").scrollIntoView({ behavior: "smooth" })
                                    }}>Compétences</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link" id="servicesMenu" onClick={(e) => {
                                        e.preventDefault()
                                        setShowMenu(false)
                                        document.getElementById("services").scrollIntoView({ behavior: "smooth" })
                                    }}>Services</a>
                                </li>
                                <li className="nav-item">
                                    <Button
                                        variant="btn button"
                                        onClick={() => {
                                            setShowMenu(false)
                                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                                        }}
                                    >Contact</Button>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header