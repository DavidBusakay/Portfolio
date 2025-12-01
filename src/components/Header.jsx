import { NavLink } from "react-router-dom"
import Logo from "../assets/img/david-busakay-profil.webp"
import { useEffect } from "react"

const Header = () => {
    
    useEffect(() => {
        const navLinks = document.querySelectorAll(".navigation .nav-link")
        const sections = document.querySelectorAll("section")
        const homeMenu = document.getElementById("homeMenu")

        const handleScroll = () => {
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

    // Gestion des clics
    useEffect(() => {
        const aboutMenu = document.getElementById("aboutMenu")
        const portfolioMenu = document.getElementById("portfolioMenu")
        const skillsMenu = document.getElementById("skillsMenu")
        const servicesMenu = document.getElementById("servicesMenu")

        const handleClickAbout = (e) => {
            console.log("Click A propos")
            e.preventDefault()
            document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" })
        }
        
        const handleClickPortfolio = (e) => {
            console.log("Click portfolio")
            e.preventDefault()
            document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })
        }
        
        const handleClickSkills = (e) => {
            console.log("Click compétences")
            e.preventDefault()
            document.getElementById("competences").scrollIntoView({ behavior: "smooth" })
        }
        
        const handleClickServices = (e) => {
            console.log("Click services")
            e.preventDefault()
            document.getElementById("services").scrollIntoView({ behavior: "smooth" })
        }
        
        aboutMenu.addEventListener("click", (e) => handleClickAbout(e))
        portfolioMenu.addEventListener("click", (e) => handleClickPortfolio(e))
        skillsMenu.addEventListener("click", (e) => handleClickSkills(e))
        servicesMenu.addEventListener("click", (e) => handleClickServices(e))

        return () => {
            aboutMenu.removeEventListener("click", (e) => handleClickAbout(e))
            portfolioMenu.removeEventListener("click", (e) => handleClickPortfolio(e))
            skillsMenu.removeEventListener("click", (e) => handleClickSkills(e))
            servicesMenu.removeEventListener("click", (e) => handleClickServices(e))
        }
    }, [])

    return (
        <header>
            <nav className="navbar navbar-expand-md position-fixed w-100 px-3 z-3">
                <div className="container rounded-5 d-flex justify-content-between align-items-center my-2 px-lg-5 px-md-3 px-sm-2 py-2 navigation">
                    <NavLink to={"/"} className="navbar-brand">
                        <div className="wrapper-logo">
                            <img
                                src={Logo}
                                className="logo"
                                alt="Logo"
                            />
                        </div>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                        data-bs-theme="dark"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end w-100" tabIndex="-1" id="offcanvasDarkNavbar">
                        <div className="offcanvas-header" style={{ backgroundColor: "var(--body-color)" }}>
                            <NavLink to={"/"} className="navbar-brand">
                                <div className="wrapper-logo">
                                    <img
                                        src={Logo}
                                        className="logo"
                                        alt="Logo"
                                    />
                                </div>
                            </NavLink>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="custom-navbar navbar-nav justify-content-end flex-grow-1 gap-lg-4 gap-mb-0 gap-0 align-items-center">
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link active" id="homeMenu">Accueil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a href="#aboutMe" className="nav-link text-nowrap" id="aboutMenu">A propos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolio" className="nav-link" id="portfolioMenu">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#competences" className="nav-link" id="skillsMenu">Compétences</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link" id="servicesMenu">Services</a>
                                </li>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn button"
                                        id="btnContactMe"
                                    >Contact</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header