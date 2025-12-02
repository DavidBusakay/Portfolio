import { FaArrowRight, FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaReact } from "react-icons/fa6"
import { Image, Badge } from "react-bootstrap"

const CardPortfolio = ({ isWebProject, image, title, description, onClick, isNew }) => {
    return (
        <div className="card p-3" style={styles.card} onClick={onClick}>
            <div className="rounded-4 overflow-hidden" style={styles.cardImage}>
                <Image
                    src={image}
                    alt="Image projet Web"
                    className="card-img object-fit-cover h-100"
                />
                {isNew && <Badge bg="" style={styles.badge}>Nouveau</Badge>}
            </div>
            <div className="card-body pb-2">
                <h4 className="card-title">
                    <span className="text-bold">{title}</span>
                </h4>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer bg-transparent border-0 pt-0">
                <div className="d-flex justify-content-between">
                    <span className="card-text">Voir plus <FaArrowRight className="ms-2" /></span>
                    <div>
                        {isWebProject ? (
                            <span>
                                <FaHtml5 className="me-2" />
                                <FaCss3Alt className="me-2" />
                                <FaBootstrap className="me-2" />
                                <FaReact className="me-2" />
                                <FaDatabase />
                            </span>
                        ) : (
                            <span>
                                <FaReact className="me-2" />
                                <FaDatabase />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    card: { cursor: "pointer" },
    cardImage: {
        position: "relative",
        height: "200px",
        cursor: "pointer"
    },
    badge: {
        position: "absolute",
        top: 10,
        left: 10,
        userSelect: "none",
        backgroundColor: "#2b65a397",
        color: "#fff",
        backdropFilter: "blur(10px)"
    }
}

export default CardPortfolio