import React, { useState } from "react";
import "css/Slide.scss";
import link from "./Link";

const slides = [
    { name: "red", target: "#" },
    { name: "orange", target: "#" },
    { name: "yellow", target: "#" },
    { name: "green", target: "#" },
    { name: "blue", target: "#" },
    { name: "navy", target: "#" },
    { name: "purple", target: "#" },
];
const slides2 = [
    {
        name: "레시피 공유 및 밀키트 판매 앱",
        target: "#",
        img: "",
        language: "JAVA",
        language2: "PHP",
        language3: "MySQL",
        url: link.recipe_github,
        url2: link.recipe_figma,
        team: "팀 프로젝트",
    },
    {
        name: "레시피 공유 및 밀키트 판매 앱의 관리자 페이지",
        target: "#",
        img: "",
        language: "PHP",
        language2: "Bootstrap",
        language3: "Python",
        url: link.recipe_php_github,
        url2: link.colab,
        team: "팀 프로젝트",
    },
    {
        name: "인터벌 타이머 앱 ",
        target: "#",
        img: "",
        language: "Flutter",
        language2: "Dart",
        language3: "",
        url: link.interval_github,
        url2: link.interval_demo,
        team: "개인 프로젝트",
    },
    {
        name: "투두리스트",
        target: "#",
        img: "",
        language: "JS",
        language2: "CSS",
        language3: "",
        url: link.toDo_github,
        url2: link.toDo_demo,
        team: "개인 프로젝트",
    },
    {
        name: "개인 웹 포트폴리오",
        target: "#",
        img: "",
        language: "React",
        language2: "JS",
        language3: "CSS",
        url: link.pf_github,
        url2: "",
        team: "개인 프로젝트",
    },
    {
        name: "서울시 실시간 날씨와 대기오염정보를 확인할 수 있는 웹페이지",
        target: "#",
        img: "",
        language: "React",
        language2: "JS",
        language3: "CSS",
        url: link.weatherRec_github,
        url2: link.weatherRec_demo,
        team: "개인 프로젝트",
    },
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
                        {/* {slides.map((s, i) => (
                            <li key={i} className={"size"}>
                                <div
                                    className="item"
                                    style={{ background: s.name }}
                                ></div>
                            </li>
                        ))} */}
                        {slides2.map((s, i) => (
                            <li key={i} className={"size"}>
                                <div className="item">
                                    <img src={s.img} alt="작업물 이미지" />
                                    <div>
                                        {s.name}
                                        {s.language}
                                        {s.language2}
                                        {s.language3}
                                    </div>
                                    <div>
                                        <a href={s.url} target="_blank">
                                            깃허브
                                        </a>
                                        <a href={s.url2} target="_blank">
                                            데모
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div
                        className={"slide clone".concat(animate ? "" : " stop")}
                    >
                        {/* {slides.map((s, i) => (
                            <li key={i} className={"size"}>
                                <div
                                    className="item"
                                    style={{ background: s.name }}
                                ></div>
                            </li>
                        ))} */}
                        {slides2.map((s, i) => (
                            <li key={i} className={"size"}>
                                <div className="item">
                                    <img src={s.img} alt="작업물 이미지" />
                                    <div>
                                        {s.name}
                                        {s.language}
                                        {s.language2}
                                        {s.language3}
                                    </div>
                                    <div>
                                        <a href={s.url} target="_blank">
                                            깃허브
                                        </a>
                                        <a href={s.url2} target="_blank">
                                            데모
                                        </a>
                                    </div>
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
