import { FaCheck, FaPaperPlane } from "react-icons/fa6"
import Btn from "./Btn"
import Input from "./inputs/Input"
import TextArea from "./inputs/TextArea"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { useState } from "react"

const ContactForm = () => {
    const [names, setNames] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isSendFormContact, setIsSendFormContact] = useState(false)
    
    const onSubmit = (data) => {
        setLoading(true)

        emailjs.send(
            "service_pmcrrgd",
            "template_h8b7asg",
            {
                names: data.names,
                email: data.email,
                subject: `Nouveau message de ${data.names} via le formulaire de contact`,
                message: data.message
            },
            {
                publicKey: "pmoOuADOtT1vJlGLt"
            }
        )
        .then(
            () => {
                setIsSendFormContact(true)
                setLoading(false)
                setNames("")
                setEmail("")
                setMessage("")
            },
            (e) => {
                setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.")
                setLoading(false)
            }
        )
    }

    return (
        <>
            {isSendFormContact && 
                <div className="alert alert-success rounded-5 mb-4" role="alert">
                    <p className="text-center text-success mb-0">Merci pour votre message !</p>
                </div>
            }
            {errorMessage && 
                <div className="alert alert-danger rounded-5 mb-4" role="alert">
                    <p className="text-center text-danger mb-0">{errorMessage}</p>
                </div>
            }
            <div data-aos="fade-up" data-aos-duration="500">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register("names", { required: true })}
                        type="text"
                        name="names"
                        id="names"
                        label="Nom complet"
                        labelFor="names"
                        value={names}
                        onChange={setNames}
                        errorMessage={errors.names && "Le nom complet est obligatoire"}
                    />
                    <Input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        id="email"
                        label="E-mail"
                        labelFor="email"
                        value={email}
                        onChange={setEmail}
                        errorMessage={errors.email && "L'adresse e-mail est obligatoire"}
                    />
                    <TextArea
                        {...register("message", { required: true })}
                        name="message"
                        id="message"
                        label="Message"
                        labelFor="message"
                        value={message}
                        onChange={setMessage}
                        errorMessage={errors.message && "Le message est obligatoire"}
                    />
                    <Btn
                        type="submit"
                        className="btn button m-2"
                        id="btnContactMe"
                        isOutline={false}
                    >
                        {loading ? (
                            <div className="spinner-border spinner-border-sm me-3" role="status"></div>
                        ) : (
                            isSendFormContact ? (
                                <FaCheck className="me-3" />
                            ) : (
                                <FaPaperPlane className="me-3" />
                            )
                        )}
                        Envoyer
                    </Btn>
                </form>
            </div>
        </>
    )
}

export default ContactForm