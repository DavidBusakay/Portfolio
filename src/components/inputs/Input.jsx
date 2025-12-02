import { useState } from "react"

const styles = {
    inputValid: {
        borderColor: "var(--orange-primary)",
        boxShadow: "0 0 0 0.25rem #ffd99336",
        marginBottom: "1.5rem"
    },
    inputInvalid: {
        borderColor: "red",
        boxShadow: "0 0 0 0.25rem #ff000036",
        marginBottom: 0
    },
    labelValid: {
        transform: "translateY(-50%) scale(0.8)",
        color: "var(--orange-primary)"
    },
    labelInvalid: {
        transform: "translateY(-50%) scale(0.8)",
        color: "red"
    }
}

const Input = ({ type, name, id, label, labelFor, value, onChange, errorMessage, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const getInputStyle = () => {
        if (errorMessage) return styles.inputInvalid
        if (isFocused && value) return styles.inputValid
        return {}
    }

    const getLabelStyle = () => {
        if (errorMessage) return styles.labelInvalid
        if (isFocused && value) return styles.labelValid
        return {}
    }

    return (
        <div className="custom-input-group">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
                style={getInputStyle()}
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
            <label
                htmlFor={labelFor}
                className="form-label"
                style={getLabelStyle()}
            >{label}</label>
            {errorMessage && (
                <p
                    className="text-danger small"
                    style={{
                        marginBottom: "1rem",
                        marginTop: "0.5rem",
                        marginLeft: "1.5rem",
                        userSelect: "none"
                    }}
                >{errorMessage}</p>
            )}
        </div>
    )
}

export default Input