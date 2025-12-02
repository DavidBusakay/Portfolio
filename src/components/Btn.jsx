import { Button } from "react-bootstrap";

const Btn = ({ type, id, isOutline, isLarge, onClick, ...rest }) => {
    return (
        <Button
            type={type}
            variant={`btn ${isOutline === true ? "button-outline" : "button"} ${isLarge === true ? "w-100" : ""}`}
            onClick={onClick}
            {...rest}
        />
    )
}

export default Btn;