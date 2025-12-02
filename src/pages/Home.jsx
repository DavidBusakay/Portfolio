import { FaFacebook, FaGithub, FaLinkedin, FaPhp } from "react-icons/fa6"
import FooterImg from "../assets/img/background-footer-portfolio.png"
import Btn from "../components/Btn"
import { FaArrowDown, FaBootstrap, FaCss3Alt, FaDatabase, FaDownload, FaEnvelope, FaHtml5, FaReact } from "react-icons/fa"
import CardPortfolio from "../components/cards/CardPortfolio"
import CardService from "../components/cards/CardService"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"
import { useState } from "react"
import { Button, Container, Image, Row } from "react-bootstrap"
import { SiFlask, SiMysql, SiTailwindcss } from "react-icons/si"
import LineDeco from "../components/LineDeco"
import DavidBusakay from "../assets/img/david-busakay.webp"
import TitleSection from "../components/TitleSection"
import { dataPortfolioWeb, dataPortfolioMobile } from "../data/Portfolio"
import ModalDetails from "../components/ModalDetails"

const styles = {
    skill: {
        color: "rgba(255, 255, 255, 0.85)"
    }
}

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [btnScrollDownAnimation, setBtnScrollDownAnimation] = useState(true)
    const [dataModal, setDataModal] = useState({})
    const [isWebProject, setIsWebProject] = useState(true)

    return (
        <>
            {/* Landing Page */}
            <section className="landing-page d-flex justify-content-center min-vh-100 py-5" id="landingPage">
                <Container className="d-flex justify-content-center align-items-center flex-column mt-3 mb-5">
                    <Row className="justify-content-center align-items-center text-center my-5">
                        <div className="col-lg-12 col-md-12 col-12">
                            <small className="title-section mb-3">Welcome</small>
                            <h1 className="display-1 text-bold mb-3">Moi c'est <span>David Busakay</span></h1>
                            <div className="d-flex justify-content-center mb-3">
                                <div className="d-flex justify-content-center">
                                    <p className="lead cursor typewriter-animation mb-3">Développeur Web et Mobile</p>
                                </div>
                            </div>
                            <Row className="justify-content-center">
                                <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                                    <Btn
                                        type="button"
                                        isOutline={false}
                                        isLarge={true}
                                        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                                    >
                                        <FaEnvelope className="me-3" size={22} />
                                        Contactez-moi
                                    </Btn>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <Btn
                                        type="button"
                                        isOutline={true}
                                        isLarge={true}
                                    >
                                        <FaDownload className="me-3" size={22} />
                                        Télécharger mon CV
                                    </Btn>
                                </div>
                            </Row>
                        </div>
                    </Row>
                    <Row>
                        <Button
                            type="button"
                            variant="btn button btn-scroll-down"
                            aria-label="Défiler vers le bas"
                            onClick={() => {
                                document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" })
                            }}
                            onMouseEnter={() => setBtnScrollDownAnimation(false)}
                            onMouseOut={() => setBtnScrollDownAnimation(true)}
                            style={{ animation: btnScrollDownAnimation ? "anim-btn 1s 0s linear infinite" : "none" }}
                        >
                            <FaArrowDown style={{ pointerEvents: "none" }} />
                        </Button>
                    </Row>
                </Container>
            </section>

            {/* A propos de moi */}
            <section className="d-flex justify-content-center py-5" id="aboutMe">
                <Container className="py-5">
                    <Row className="justify-content-between align-items-center">
                        <div className="col-lg-4 col-md-12 col-12 my-4">
                            <div data-aos="zoom-in" style={{ overflow: "hidden" }}>
                                <div className="rounded-4 profil-hover w-100">
                                    <Image
                                        src={DavidBusakay}
                                        className="w-100"
                                        alt="Image - David Busakay"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12 col-12"></div>
                        <div className="col-lg-7 col-md-12 col-12" id="readmeCard">
                            <div data-aos="zoom-in">
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
                                            <Btn
                                                type="button"
                                                isOutline={true}
                                                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                                            >En savoir plus</Btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <LineDeco />
            </section>

            {/* Portfolio */}
            <section className="py-5" id="portfolio">
                <Container className="py-5">
                    <TitleSection title="Portfolio" label="Mes projets" />
                    <Row>
                        <div className="card bg-transparent border-0 mb-4 menu-portfolio">
                            <div className="card-header bg-transparent border-0 redressed fs-6">
                                <ul className="nav nav-tabs nav-pills justify-content-center card-header-tabs">
                                    <li className="nav-item" data-aos="fade-up">
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
                                    <li className="nav-item" data-aos="fade-up">
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
                                <Row>
                                    {dataPortfolioWeb.map((data, index) => (
                                        <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                                            <div data-aos="zoom-in">
                                                <CardPortfolio
                                                    isWebProject={true}
                                                    image={data.image}
                                                    title={data.title}
                                                    description={data.content}
                                                    onClick={() => {
                                                        setDataModal({
                                                            "title": data.title,
                                                            "content": data.content,
                                                            "technologies": {
                                                                "frontend": data.technologies.frontend,
                                                                "backend": data.technologies.backend,
                                                                "database": data.technologies.database
                                                            },
                                                            "link": data.link,
                                                            "isNew": data.isNew
                                                        })
                                                        setIsWebProject(true)
                                                        setShowModal(true)
                                                    }}
                                                    isNew={data.isNew ? true : false}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </div>
                            {/* Projets Mobile */}
                            <div className="tab-pane fade" id="projetsMobile" aria-label="Projets Mobile">
                                <Row>
                                    {dataPortfolioMobile.map((data, index) => (
                                        <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                                            <div data-aos="zoom-in">
                                                <CardPortfolio
                                                    isWebProject={false}
                                                    image={data.image}
                                                    title={data.title}
                                                    description={data.content}
                                                    onClick={() => {
                                                        setDataModal({
                                                            "title": data.title,
                                                            "content": data.content,
                                                            "technologies": {
                                                                "frontend": data.technologies.frontend,
                                                                "backend": data.technologies.backend,
                                                                "database": data.technologies.database
                                                            },
                                                            "link": data.link,
                                                            "isNew": data.isNew
                                                        })
                                                        setIsWebProject(false)
                                                        setShowModal(true)
                                                    }}
                                                    isNew={data.isNew ? true : false}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
                <LineDeco />

                {/* Modal */}
                <ModalDetails
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    dataTitle={dataModal.title}
                    dataContent={dataModal.content}
                    technologies={dataModal.technologies}
                    dataLink={dataModal.link}
                    isWebProject={isWebProject}
                    isNew={dataModal.isNew}
                />
            </section>

            {/* Compétences */}
            <section className="py-5" id="competences">
                <Container className="text-center py-5">
                    <TitleSection title="Compétences" label="Mes Softskills" />
                    <Row>
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
                                <SiTailwindcss className="display-3" style={styles.skill} />
                                <p className="mt-3">Tailwind CSS</p>
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
                                <FaReact className="display-3" style={styles.skill} />
                                <p className="mt-3">React Native</p>
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
                                <SiFlask className="display-3" style={styles.skill} />
                                <p className="mt-3">Flask</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <SiMysql className="display-3" style={styles.skill} />
                                <p className="mt-3">MySQL</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4 mb-5">
                            <div data-aos="flip-down">
                                <FaGithub className="display-3" style={styles.skill} />
                                <p className="mt-3">GitHub</p>
                            </div>
                        </div>
                    </Row>
                </Container>
                <LineDeco />
            </section>

            {/* Services */}
            <section className="py-5" id="services">
                <Container className="py-5">
                    <TitleSection title="Services" label="Mes domaines" />
                    <Row>
                        <div className="col-lg-4 col-md-6 col-12" id="serviceCard">
                            <div data-aos="flip-right">
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
                            <div data-aos="flip-right">
                                <CardService
                                    title="Développement Apps Web"
                                    content="J'exploite des technologies modernes telles que Flask pour créer des 
                                    applications web sur mesure, adaptées à vos besoins spécifiques."
                                >
                                    <FaHtml5 className="me-2" />
                                    <FaCss3Alt className="me-2" />
                                    <FaBootstrap className="me-2" />
                                    <FaReact className="me-2" />
                                    <SiFlask className="me-2" />
                                    <FaDatabase />
                                </CardService>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" id="serviceCard">
                            <div data-aos="flip-right">
                                <CardService
                                    title="Développement Mobile"
                                    content="Avec React Native, je développe des solutions mobiles adaptées à vos exigences."
                                >
                                    <FaReact className="me-2" />
                                    <SiFlask className="me-2" />
                                    <FaDatabase />
                                </CardService>
                            </div>
                        </div>
                    </Row>
                </Container>
                <LineDeco />
            </section>

            {/* Contact */}
            <section className="py-5" id="contact">
                <div className="container py-5">
                    <TitleSection title="Contact" label="En savoir plus" />
                    <Row className="justify-content-center mb-5">
                        <div className="col-lg-8">
                            <Row>
                                <div className="col-md-5 pe-lg-5 pe-md-2">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <div data-aos="fade-up">
                                                <SocialMedia
                                                    name="LinkedIn"
                                                    link="https://www.linkedin.com/in/david-busakay-21b591273/"
                                                >
                                                    <FaLinkedin />
                                                </SocialMedia>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div data-aos="fade-up">
                                                <SocialMedia
                                                    name="Facebook"
                                                    link="https://web.facebook.com/profile.php?id=100087745565507"
                                                >
                                                    <FaFacebook />
                                                </SocialMedia>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div data-aos="fade-up">
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
                            </Row>
                        </div>
                    </Row>
                </div>
            </section>

            <Image
                src={FooterImg}
                alt=""
                className="img-waves"
            />
        </>
    )
}

export default Home