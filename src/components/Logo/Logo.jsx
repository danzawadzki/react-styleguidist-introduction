import * as React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import styles from "./Logo.module.css";

/**
 * Logo component
 */
const Logo = ({src = logo, alt = "App logo", animated = false}) => (
    <img
        src={src}
        className={`${styles.Logo} ${animated ? styles.Logo_animated : ""} `}
        alt={alt}
    />
);

Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    animated: PropTypes.bool
};

export default Logo;
