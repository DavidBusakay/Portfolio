const Btn = ({ type, id, isOutline, ...rest }) => {
    return (
        <button
            type={type}
            id={id}
            className={`btn ${isOutline === true ? "button-outline" : "button"} m-2 w-100`}
            {...rest}
        />
    )
}

export default Btn;