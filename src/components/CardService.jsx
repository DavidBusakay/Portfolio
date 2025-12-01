const CardService = ({ title, content, ...rest }) => {
    return (
        <div className="card mb-4" id="serviceCard" style={{ minHeight: "230px" }}>
            <div className="card-body" style={{ padding: "0.7rem" }}>
                <div className="px-2 py-1">
                    <div className="window-controls">
                        <span className="control-button close"></span>
                        <span className="control-button minimize"></span>
                        <span className="control-button maximize"></span>
                    </div>
                </div>
                <div className="window-content">
                    <h4 className="card-title">
                        <span className="text-bold">{title}</span>
                    </h4>
                    <p className="card-text">{content}</p>
                    <div>
                        <span {...rest} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardService