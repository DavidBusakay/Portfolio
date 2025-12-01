import { useState } from "react"
import { FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaReact } from "react-icons/fa6"

const CardPortfolio = ({ isWebProject, image, title, description, onClick }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        // code
    }

    return (
        <div className="card p-3" onClick={onClick}>
            <div className="rounded-4 overflow-hidden" style={{ cursor: "pointer", height: "200px" }}>
                <img
                    src={image}
                    alt="Image projet Web"
                    className="card-img object-fit-cover h-100"
                />
            </div>
            <div className="card-body pb-2">
                <h4 className="card-title">
                    <span className="text-bold">{title}</span>
                </h4>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer bg-transparent border-0 pt-0">
                <div className="d-flex justify-content-between">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#detailsWebModal">
                        <span className="card-text">Voir plus <i className="fa-solid fa-arrow-right"></i></span>
                    </a>
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

export default CardPortfolio