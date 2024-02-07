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
        bgColor: "#D9DBEE",
        color: "#403973",
        shape: "square",
    },
    {
        content1: "JS",
        content2: "DART",
        content3: "Flutter",
        bgColor: "#8E97F0",
        color: "#fff",
        shape: "radiusStrong",
    },
    { shape: "square" },
    {
        content1: "React",
        content2: "Bootstrap",
        content3: "CSS",
        // bgColor: "#434A8A",
        color: "#fff",
        shape: "flower",
    },
    { bgColor: "#D9DBEE", color: "#403973", shape: "rectangle" },
    {
        content1: "MySQL",
        bgColor: "#868FAD",
        color: "#fff",
        shape: "circle",
    },
    {
        content1: "Github",
        content2: "Figma",
        content3: "Git",
        bgColor: "#E0C7F2",
        color: "#655280",
        shape: "square",
    },
    {
        // bgColor: "#434A8A",
        color: "#fff",
        shape: "flower",
    }, //이미지 넣기
];

const Slide = () => {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);
    const img = "https://source.unsplash.com/DPlEQT7Hlpk";
    const img2 = "https://source.unsplash.com/q4TfWtnz_xw";
    const img3 = "https://source.unsplash.com/EUeP0jK6Rmw";
    const list = `HTML
    CSS
    JS
    DART
    Flutter
    React
    Bootstrap
    MySQL
    Github
    Figma
    Git`;

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
                                    s.shape === "square"
                                        ? "square"
                                        : s.shape === "radiusStrong"
                                        ? "radiusStrong"
                                        : s.shape === "rectangle"
                                        ? "rectangle"
                                        : s.shape === "circle"
                                        ? "circle"
                                        : "flower"
                                }
                                style={{
                                    backgroundColor: s.bgColor,
                                    color: s.color,
                                }}
                            >
                                <div className="item">
                                    {s.content1 == null &&
                                    s.shape === "square" ? (
                                        <img src={img} className="noContent" />
                                    ) : null}
                                    {s.content1 == null &&
                                    s.shape === "rectangle" ? (
                                        <img src={img2} className="" />
                                    ) : null}
                                    {s.content1 == null &&
                                    s.shape === "flower" ? (
                                        <img src={img3} className="" />
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
                                    s.shape === "square"
                                        ? "square"
                                        : s.shape === "radiusStrong"
                                        ? "radiusStrong"
                                        : s.shape === "rectangle"
                                        ? "rectangle"
                                        : s.shape === "circle"
                                        ? "circle"
                                        : "flower"
                                }
                                style={{
                                    backgroundColor: s.bgColor,
                                    color: s.color,
                                }}
                            >
                                <div className="item">
                                    {s.content1 == null &&
                                    s.shape === "square" ? (
                                        <img src={img} className="noContent" />
                                    ) : null}
                                    {s.content1 == null &&
                                    s.shape === "rectangle" ? (
                                        <img src={img2} className="" />
                                    ) : null}
                                    {s.content1 == null &&
                                    s.shape === "flower" ? (
                                        <img src={img3} className="" />
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
            <span
                className="tool"
                data-tip="Use this data-tip attribute to store your tool tip message."
                tabIndex="2"
            >
                data-tip
            </span>
        </div>
    );
};

export default Slide;
