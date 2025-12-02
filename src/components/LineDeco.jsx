import { Image } from "react-bootstrap"
import LineImg from "../assets/img/detail.png"

const LineDeco = () => {
    return (
        <Image
            src={LineImg}
            alt=""
            className="detail"
            data-aos="zoom-in"
        />
    )
}

export default LineDeco