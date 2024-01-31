import React, { useState } from "react";
import "css/Slide.scss";
import link from "./Link";
import images from "components/ImagesImport";
import styled from "styled-components";
import colors from "./SkillsColor";

const slides = [
    {
        content1: "HTML",
        content2: "CSS",
        target: "#",
        bgColor: "#D9DBEE",
        color: "#403973",
    },
    {
        content1: "JS",
        content2: "DART",
        content3: "Flutter",
        target: "#",
        bgColor: "#D9DBEE",
        color: "#403973",
        shape: "radiusStrong",
    },
    { target: "#" },
    {
        content1: "React",
        content2: "Bootstrap",
        content3: "CSS",
        target: "#",
        bgColor: "#D9DBEE",
        color: "#403973",
        shape: "shape",
    },
    { target: "#", shape: "rectangle" },
    {
        content1: "MySQL",
        target: "#",
        bgColor: "#D9DBEE",
        color: "#403973",
    },
    {
        content1: "Github",
        content2: "Figma",
        content3: "Git",
        target: "#",
        bgColor: "#D9DBEE",
        color: "#403973",
    },
    { target: "#", shape: "flower" },
];

const Slide = () => {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return (
        <div className="wrapper">
            <div className="slide_container">
                <ul
                    className="slide_wrapper"
                    onMouseEnter={onStop}
                    onMouseLeave={onRun}
                >
                    <div
                        className={"slide original".concat(
                            animate ? "" : " stop",
                        )}
                    >
                        {slides.map((s, i) => (
                            <li
                                key={i}
                                className={
                                    s.shape == null
                                        ? "square"
                                        : s.shape == "radiusStrong"
                                        ? "radiusStrong"
                                        : s.shape == "rectangle"
                                        ? "rectangle"
                                        : s.shape == "shape"
                                        ? "shape"
                                        : "flower"
                                }
                                style={{
                                    backgroundColor: s.bgColor,
                                    color: s.color,
                                }}
                            >
                                <div className="item">
                                    {s.content1 == null ? (
                                        <img
                                            src="https://source.unsplash.com/DPlEQT7Hlpk"
                                            className="noContent"
                                        />
                                    ) : null}
                                    <span>{s.content1}</span>
                                    <span>{s.content2}</span>
                                    <span>{s.content3}</span>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div
                        className={"slide clone".concat(animate ? "" : " stop")}
                    >
                        {slides.map((s, i) => (
                            <li
                                key={i}
                                className={
                                    s.shape == null
                                        ? "square"
                                        : s.shape == "radiusStrong"
                                        ? "radiusStrong"
                                        : s.shape == "rectangle"
                                        ? "rectangle"
                                        : s.shape == "shape"
                                        ? "shape"
                                        : "flower"
                                }
                                style={{
                                    backgroundColor: s.bgColor,
                                    color: s.color,
                                }}
                            >
                                <div className="item">
                                    {s.content1 == null ? (
                                        <img
                                            src="https://source.unsplash.com/DPlEQT7Hlpk"
                                            className="noContent"
                                        />
                                    ) : null}
                                    <span>{s.content1}</span>
                                    <span>{s.content2}</span>
                                    <span>{s.content3}</span>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Slide;
