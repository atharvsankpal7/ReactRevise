import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary "
            data-bs-theme={`${props.colorMode}`}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    logo
                </a>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                {props.title}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.aboutText}
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button
                            id="btn-mode-toogle"
                            className={`btn btn-outline-${props.textColor}`}
                            onClick={props.toggleTheme}
                        >
                            {`${props.textColor} `}
                            Mode
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: "title",
    aboutText: "about us",
};
