import * as React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import styles from "./Logo.module.css";

/**
 * Logo component
 *
 * Separated component with logo from create-react-app. By default, it displays the symbol of the react library.
 */
const Logo = ({src = logo, alt = "App logo", animated = false}) => (
    <img
        src={src}
        className={`${styles.Logo} ${animated ? styles.Logo_animated : ""} `}
        alt={alt}
    />
);

Logo.propTypes = {
    /** Logo image source. */
    src: PropTypes.string,
    /** Image alternative text. */
    alt: PropTypes.string,
    /** Flat to attach spinning animation to the component. */
    animated: PropTypes.bool
};

export default Logo;
