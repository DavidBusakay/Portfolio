
const SocialMedia = ({ name, link, ...rest }) => {
    return (
        <a href={link} target="_blank">
            <div className="social-media">
                <div className="wrapper-icon" {...rest} />
                <p className="text-bold fs-5 mb-0">{name}</p>
            </div>
        </a>
    )
}

export default SocialMedia