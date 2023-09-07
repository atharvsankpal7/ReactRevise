import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary "
            data-bs-theme={`${props.colorMode}`}
        >
            <div className="container-fluid">
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/">{props.title}</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <button
                        id="btn-mode-toogle"
                        className={`btn btn-outline-${props.textColor}`}
                        onClick={props.toggleTheme}
                    >
                        {`${props.textColor} `}
                        Mode
                    </button>
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
