import { Badge, Modal } from "react-bootstrap"

const ModalDetails = ({ show, handleClose, dataTitle, dataContent, technologies, dataLink, isWebProject, isNew }) => {
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
                    <span>{dataTitle}</span>
                </Modal.Title>
                {isNew && <Badge bg="" style={styles.badge}>Nouveau</Badge>}
            </Modal.Header>
            <Modal.Body className="pt-1">
                <p>{dataContent}</p>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-dark">
                        <thead>
                            <tr className="text-center">
                                <th>{isWebProject ? "Frontend" : "UI"}</th>
                                <th>{isWebProject ? "Backend": "API"}</th>
                                <th>Base de données</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technologies?.frontend.map((dataFrontend, key) => (
                                technologies?.backend.map((dataBackend, _) => (
                                    technologies?.database.map((dataDB, _) => (
                                        <tr key={key}>
                                            <td>{dataFrontend}</td>
                                            <td>{dataBackend}</td>
                                            <td>{dataDB}</td>
                                        </tr>
                                    ))
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            {dataLink !== "" && (
                <Modal.Footer className="border-0">
                    <a
                        type="button"
                        href={dataLink}
                        className="btn btn-light button"
                        target="_blank"
                    >Voir le projet</a>
                </Modal.Footer>
            )}
        </Modal>
    )
}

const styles = {
    badge: {
        userSelect: "none",
        backgroundColor: "#2b65a397",
        color: "#fff",
        backdropFilter: "blur(10px)",
        marginLeft: 20
    }
}

export default ModalDetails