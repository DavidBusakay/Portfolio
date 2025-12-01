import { NavLink } from "react-router-dom"

const Footer = () => {
    const currentYear = new Date().getUTCFullYear()
    
    return (
        <footer className="text-center py-5">
            <p className="mb-0">
                <small className="small">
                    &copy; {currentYear} <NavLink to={"/"}>David Busakay</NavLink> | Tous droits reservés
                </small>
            </p>
        </footer>
    )
}

export default Footer