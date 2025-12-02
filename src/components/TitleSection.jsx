import { Row } from "react-bootstrap"

const TitleSection = ({ title, label }) => {
    return (
        <Row className="justify-content-center text-center mb-5">
            <div className="col-lg-6 col-md-8 col-12">
                <small className="title-section mb-2" data-aos="fade-up">{label}</small>
                <h3 data-aos="fade-up">
                    <span className="text-bold">{title}</span>
                </h3>
            </div>
        </Row>
    )
}

export default TitleSection