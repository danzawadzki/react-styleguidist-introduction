import * as React from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

/**
 * Link component
 *
 * Separated component with link from create-react-app.
 */
const Link = ({href = "#", children, blank = false}) => (
    <a className={styles.Link} href={href} target={blank ? "_blank" : "_self"}>
        {children}
    </a>
);

Link.propTypes = {
    /** Link href address. */
    href: PropTypes.string,
    /** Defines where to open link (current or new tab). */
    blank: PropTypes.bool,
    /** Component content. */
    children: PropTypes.string.isRequired
};

export default Link;
