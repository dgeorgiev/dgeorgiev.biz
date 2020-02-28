import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import useTranslations from "../utils/useTranslations";

function Footer() {
    const { contact_text } = useTranslations();
    return (
        <>
            <section className="contact-box">
                <p>
                    {contact_text}{" "}
                    <a href="mailto:daniel@dabanny.com?Subject=Hi">
                        <strong>daniel@dabanny.com</strong>
                    </a>
                </p>
            </section>
            <footer>
                <p>&copy; dgeorgiev.biz</p>
                <nav className="navigation">
                    <a href="https://github.com/dgeorgiev">
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{ width: 24 }}
                        />
                    </a>
                    <a href="https://github.com/dgeorgiev">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ width: 24 }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-georgiev-97430222/">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ width: 24 }}
                        />
                    </a>
                </nav>
            </footer>
        </>
    );
}

export default Footer;
