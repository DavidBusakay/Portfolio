import { FaFacebook, FaGithub, FaLinkedin, FaPhp, FaPython } from "react-icons/fa6"
import LineImg from "../assets/img/detail.png"
import FooterImg from "../assets/img/background-footer-portfolio.png"
import Btn from "../components/Btn"
import { FaArrowDown, FaBootstrap, FaCss3Alt, FaDatabase, FaDownload, FaEnvelope, FaHtml5, FaReact } from "react-icons/fa"
import CardPortfolio from "../components/CardPortfolio"
import CardService from "../components/CardService"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

const styles = {
    skill: {
        color: "rgba(255, 255, 255, 0.85)"
    }
}

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        const allBtnContact = document.querySelectorAll("#btnContactMe")
        const btnScrollDown = document.getElementById("btnScrollDown")
        const targetSectionAbout = document.getElementById("aboutMe")
        
        const handleClickContact = () => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }

        // Scroll down
        const handleClickBtnScrollDown = () => {
            targetSectionAbout.scrollIntoView({ behavior: "smooth" })
        }
        const handleMouseEnterBtnScrollDown = () => {
            btnScrollDown.style.animation = "none"
        }
        
        const handleMouseOutBtnScrollDown = () => {
            btnScrollDown.style.animation = "anim-btn 1s 0s linear infinite"
        }
        
        allBtnContact.forEach(btnContact => {
            btnContact.addEventListener("click", handleClickContact)
        });
        btnScrollDown.addEventListener("click", handleClickBtnScrollDown)
        btnScrollDown.addEventListener("mouseenter", handleMouseEnterBtnScrollDown)
        btnScrollDown.addEventListener("mouseout", handleMouseOutBtnScrollDown)
        
        return () => {
            allBtnContact.forEach(btnContact => {
                btnContact.removeEventListener("click", handleClickContact)
            });
        }
    }, [])

    return (
        <main>
            {/* Landing Page */}
            <section className="landing-page d-flex justify-content-center min-vh-100 py-5" id="landingPage">
                <div className="container d-flex justify-content-center align-items-center flex-column mt-3 mb-5">
                    <div className="row justify-content-center align-items-center text-center my-5">
                        <div className="col-lg-12 col-md-8 col-12">
                            <small className="title-section mb-3">Welcome</small>
                            <h1 className="display-1 text-bold mb-3">Moi c'est <span>David Busakay</span></h1>
                            <div className="d-flex justify-content-center mb-3">
                                <div className="d-flex justify-content-center">
                                    <p className="lead cursor typewriter-animation mb-3">Développeur Web et Mobile</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-12 col-12">
                                    <Btn
                                        type="button"
                                        id="btnContactMe"
                                        isOutline={false}
                                    >
                                        <FaEnvelope className="me-3" />
                                        Contactez-moi
                                    </Btn>
                                </div>
                                <div className="col-lg-4 col-md-12 col-12">
                                    <Btn
                                        type="button"
                                        isOutline={true}
                                    >
                                        <FaDownload className="me-3" />
                                        Télécharger mon CV
                                    </Btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button
                            type="button"
                            className="button btn-scroll-down"
                            id="btnScrollDown"
                            aria-label="Défiler vers le bas"
                        >
                            <FaArrowDown style={{ pointerEvents: "none" }} />
                        </button>
                    </div>
                </div>
            </section>

            {/* A propos de moi */}
            <section className="d-flex justify-content-center py-5" id="aboutMe">
                <div className="container py-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-4 col-md-12 col-12 my-4">
                            <div data-aos="zoom-in" data-aos-duration="500" style={{ overflow: "hidden" }}>
                                <div className="rounded-4 profil-hover w-100">
                                    <img
                                        src="/src/assets/img/david-busakay.webp"
                                        className="w-100"
                                        alt="Image - David Busakay"
                                    />
                                </div>
                                <div className="name" id="myName">
                                    <div>
                                        <p>David Busakay</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12 col-12"></div>
                        <div className="col-lg-7 col-md-12 col-12" id="readmeCard">
                            <div data-aos="zoom-in" data-aos-duration="500">
                                <div className="card">
                                    <div className="card-body" style={{ padding: "0.7rem" }}>
                                        <div className="d-flex justify-content-center px-2 py-1">
                                            <div className="window-controls me-auto">
                                                <span className="control-button close"></span>
                                                <span className="control-button minimize"></span>
                                                <span className="control-button maximize"></span>
                                            </div>
                                            <small className="small me-auto">README.md</small>
                                        </div>
                                        <div className="window-content">
                                            <p className="card-text">
                                                Depuis l'âge de 15 ans, je nourris une passion pour la Programmation Informatique. 
                                                J'ai débuté mon apprentissage avec le langage Python, ce qui m'a permis d'acquérir 
                                                une solide compréhension des concepts et de la logique algorithmique, facilitant 
                                                ainsi mon adaptation à d'autres langages de programmation.
                                            </p>
                                            <p className="card-text">
                                                Avant d'entamer mon parcours universitaire, j'ai élargi mes compétences en 
                                                apprenant les langages web tels que HTML, CSS, JavaScript et PHP, dans le 
                                                but de répondre aux besoins de ma communauté.
                                            </p>
                                            <p className="card-text">
                                                Pour approfondir mes connaissances en développement web, je me suis formé de 
                                                manière autonome au framework Flask du langage de programmation Python, que 
                                                j'utilise pour la gestion du backend de mes sites et applications web.
                                            </p>
                                            <p className="card-text">
                                                Parallèlement à mes études universitaires, j'ai appris à maîtriser React et 
                                                React Native, dans l'objectif de développer des applications web Full JavaScript 
                                                modernes et performantes ainsi que les applications mobiles.
                                            </p>
                                            <button
                                                type="button"
                                                className="btn button-outline"
                                                id="btnContactMe"
                                            >En savoir plus</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={LineImg}
                    alt=""
                    className="detail"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                />
            </section>

            {/* Portfolio */}
            <section className="py-5" id="portfolio">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <small className="title-section mb-2" data-aos="fade-up" data-aos-duration="500">Mes projets</small>
                            <h1 className="fs-3" data-aos="fade-up" data-aos-duration="500">
                                <span className="text-bold">Portfolio</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card bg-transparent border-0 mb-4 menu-portfolio">
                            <div className="card-header bg-transparent border-0 redressed fs-6">
                                <ul className="nav nav-tabs nav-pills justify-content-center card-header-tabs">
                                    <li className="nav-item" data-aos="fade-up" data-aos-duration="500">
                                        <button
                                            className="btn button mx-lg-2 mx-md-2 mb-2 active"
                                            type="button"
                                            role="tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#projetsWeb"
                                            aria-controls="projetsWeb"
                                            aria-selected="true"
                                        >Web</button>
                                    </li>
                                    <li className="nav-item" data-aos="fade-up" data-aos-duration="500">
                                        <button
                                            className="btn button mx-lg-2 mx-md-2 mb-2"
                                            type="button"
                                            role="tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#projetsMobile"
                                            aria-controls="projetsMobile"
                                            aria-selected="false"
                                        >Mobile</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Projets */}
                        <div className="tab-content">
                            {/* Projets Web */}
                            <div className="tab-pane active show fade" id="projetsWeb" aria-label="Projets Web">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={true}
                                                image="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"
                                                title="Nom du projet Web"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={true}
                                                image="https://images.pexels.com/photos/17485353/pexels-photo-17485353.jpeg"
                                                title="Nom du projet Web"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={true}
                                                image="https://images.pexels.com/photos/8284729/pexels-photo-8284729.jpeg"
                                                title="Nom du projet Web"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Projets Mobile */}
                            <div className="tab-pane fade" id="projetsMobile" aria-label="Projets Mobile">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={false}
                                                image="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
                                                title="Nom du projet Mobile"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={false}
                                                image="https://images.pexels.com/photos/16345434/pexels-photo-16345434.jpeg"
                                                title="Nom du projet Mobile"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                                        <div data-aos="zoom-in" data-aos-duration="500">
                                            <CardPortfolio
                                                isWebProject={false}
                                                image="https://images.pexels.com/photos/17077372/pexels-photo-17077372.jpeg"
                                                title="Nom du projet Mobile"
                                                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi pariatur qui..."
                                                onClick={() => setShowModal(true)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={LineImg}
                    alt=""
                    className="detail"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                />

                {/* Modal */}
                <ModalDetails show={showModal} handleClose={() => setShowModal(false)} />
            </section>

            {/* Compétences */}
            <section className="py-5" id="competences">
                <div className="container text-center py-5">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-6 col-md-8 col-12">
                            <small className="title-section mb-2" data-aos="fade-up" data-aos-duration="500">Mes Softskills</small>
                            <h1 className="fs-3" data-aos="fade-up" data-aos-duration="500">
                                <span className="text-bold">Compétences</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaHtml5 className="display-3" style={styles.skill} />
                                <p className="mt-3">HTML 5</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaCss3Alt className="display-3" style={styles.skill} />
                                <p className="mt-3">CSS 3</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaBootstrap className="display-3" style={styles.skill} />
                                <p className="mt-3">Bootstrap 5</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaReact className="display-3" style={styles.skill} />
                                <p className="mt-3">React</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaPhp className="display-3" style={styles.skill} />
                                <p className="mt-3">PHP</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaPython className="display-3" style={styles.skill} />
                                <p className="mt-3">Python</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaDatabase className="display-3" style={styles.skill} />
                                <p className="mt-3">MySQL</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaGithub className="display-3" style={styles.skill} />
                                <p className="mt-3">GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={LineImg}
                    alt=""
                    className="detail"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                />
            </section>

            {/* Services */}
            <section className="py-5" id="services">
                <div className="container py-5">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-6 col-md-8 col-12">
                            <small className="title-section mb-2" data-aos="fade-up" data-aos-duration="500">Mes domaines</small>
                            <h1 className="fs-3" data-aos="fade-up" data-aos-duration="500">
                                <span className="text-bold">Services</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12" id="serviceCard">
                            <div data-aos="flip-right" data-aos-duration="500">
                                <CardService
                                    title="Développement Sites Web"
                                    content="Grâce à mon expertise, je conçois des sites web de haute qualité, 
                                    en parfaite adéquation avec votre image de marque ou celle de votre entreprise."
                                >
                                    <FaHtml5 className="me-2" />
                                    <FaCss3Alt className="me-2" />
                                    <FaBootstrap className="me-2" />
                                    <FaReact className="me-2" />
                                    <FaDatabase />
                                </CardService>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" id="serviceCard">
                            <div data-aos="flip-right" data-aos-duration="500">
                                <CardService
                                    title="Développement Apps Web"
                                    content="J'exploite des technologies modernes telles que Flask pour créer des 
                                    applications web sur mesure, adaptées à vos besoins spécifiques."
                                >
                                    <FaHtml5 className="me-2" />
                                    <FaCss3Alt className="me-2" />
                                    <FaBootstrap className="me-2" />
                                    <FaReact className="me-2" />
                                    <FaPython className="me-2" />
                                    <FaDatabase />
                                </CardService>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" id="serviceCard">
                            <div data-aos="flip-right" data-aos-duration="500">
                                <CardService
                                    title="Développement Mobile"
                                    content="Avec React Native, je développe des solutions mobiles adaptées à vos exigences."
                                >
                                    <FaReact className="me-2" />
                                    <FaPython className="me-2" />
                                    <FaDatabase />
                                </CardService>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={LineImg}
                    alt=""
                    className="detail"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                />
            </section>

            {/* Contact */}
            <section className="py-5" id="contact">
                <div className="container py-5">
                    <div className="row justify-content-center text-center mb-lg-5 mb-md-3 mb-sm-3">
                        <div className="col-lg-6 col-md-8 col-12">
                            <small className="title-section mb-2" data-aos="fade-up" data-aos-duration="500">En savoir plus</small>
                            <h1 className="fs-3" data-aos="fade-up" data-aos-duration="500">
                                <span className="text-bold">Contact</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-5 pe-lg-5 pe-md-2">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <div data-aos="fade-up" data-aos-duration="500">
                                                <SocialMedia
                                                    name="LinkedIn"
                                                    link="https://www.linkedin.com/in/david-busakay-21b591273/"
                                                >
                                                    <FaLinkedin />
                                                </SocialMedia>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div data-aos="fade-up" data-aos-duration="500">
                                                <SocialMedia
                                                    name="Facebook"
                                                    link="https://web.facebook.com/profile.php?id=100087745565507"
                                                >
                                                    <FaFacebook />
                                                </SocialMedia>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div data-aos="fade-up" data-aos-duration="500">
                                                <SocialMedia
                                                    name="GitHub"
                                                    link="https://github.com/DavidBusakay/"
                                                >
                                                    <FaGithub />
                                                </SocialMedia>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Formulaire */}
                                <div className="col-md-7">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <img
                src={FooterImg}
                alt=""
                className="img-waves"
            />
        </main>
    )
}

const ModalDetails = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
            scrollable
            className="bg-blur"
        >
            <Modal.Header className="border-0" closeButton closeVariant="white">
                <Modal.Title className="text-bold">
                    <span>Projet web</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-1">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptas molestiae delectus laudantium cum magnam labore unde consectetur.
                </p>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-dark">
                        <thead>
                            <tr className="text-center">
                                <th>Front-end</th>
                                <th>Back-end</th>
                                <th>Base de données</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <a
                    type="button"
                    href="#"
                    className="btn btn-light button"
                    target="_blank"
                >Visiter le site</a>
            </Modal.Footer>
        </Modal>
    )
}

export default Home