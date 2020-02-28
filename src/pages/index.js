import React from "react";

import SEO from "../components/seo";
import me from "../images/me.png";

import useTranslations from "../utils/useTranslations";

const IndexPage = () => {
    const { hello } = useTranslations();

    return (
        <>
            <SEO title="За мен" keywords={["gatsby", "application", "react"]} />
            <article className="home-introduction">
                <div class="home-intro">
                    <h2>Hi, I'm Daniel.</h2>
                    <p>
                        Full Stack developer with <strong>10+ years</strong> of
                        experience in{" "}
                        <strong>JS/TypeScript, PHP, HTML, CSS/Sass</strong>.
                    </p>
                    <p>
                        My main focus at the moment is on{" "}
                        <strong>
                            React, React Native, Gatsby, NextJS, Laravel,
                            Symfony
                        </strong>
                        .{" "}
                    </p>
                    <p>
                        Currently I'm working with people from small and medium
                        business
                        <br />
                        launch or expand their ideas/projects at my own digital
                        agency{" "}
                        <a href="https://dabanny.com">
                            <strong>dabanny.com</strong>
                        </a>
                        .
                    </p>
                    <p>
                        I'm also a part of the team behind an exciting sport
                        <br />
                        platform that facilitates all parties in the sport
                        <br />
                        service delivery process – providers and users{" "}
                        <a href="https://sportpoint.bg">
                            <strong>sportpoint.bg</strong>
                        </a>
                        .
                    </p>
                    <p>
                        In my free time I enjoy spending time with my family,
                        <br />
                        watching motosports(formula, motogp) and playing games
                        <br />
                        Occasionally enduro riding or track days with my miata.
                    </p>
                </div>
                <div class="home-photo">
                    <img src={me} />
                </div>
            </article>
            <section>
                <h2>Blog</h2>
                <div class="blog-list">
                    <article>
                        <a href="#">
                            <img src="https://via.placeholder.com/350x200" />
                            <h1>Simple react native setup</h1>
                            <p>
                                In today article I will share a simple setup for
                                an app with user role based flows.
                            </p>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <img src="https://via.placeholder.com/350x200" />
                            <h1>Laravel Epay new version</h1>
                            <p>
                                A few years ago I got a home task for a job
                                opportunity which resulted in this package.
                            </p>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <img src="https://via.placeholder.com/350x200" />
                            <h1>New site launched</h1>
                            <p>
                                After a dozen of tries I finally come up with
                                something that I like.
                            </p>
                        </a>
                    </article>
                </div>
            </section>
            <section class="contact-box">
                <p>
                    If you have an challenging project or just want to say hi
                    please reach me at at{" "}
                    <a href="mailto:daniel@dabanny.com?Subject=Hi">
                        <strong>daniel@dabanny.com</strong>
                    </a>
                </p>
            </section>
        </>
    );
};

export default IndexPage;
