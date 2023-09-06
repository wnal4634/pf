import React from "react";
import styles from "css/Skills.module.css";
import images from "components/ImagesImport";
import { Mobile, PC } from "./Responsive";

const Skills = () => {
    return (
        <>
            <PC>
                <div id="2" className={styles.skills_wrap}>
                    <h2>🔧 Skills</h2>
                    <hr />
                    <div className={styles.skills_img}>
                        <div className={styles.skills_img_row}>
                            <div>
                                <img src={images.html} alt="html 이미지" />
                                <span>HTML</span>
                            </div>
                            <div>
                                <img src={images.css} alt="css 이미지" />
                                <span>CSS</span>
                            </div>
                            <div>
                                <img src={images.js} alt="js 이미지" />
                                <span>JS</span>
                            </div>
                            <div>
                                <img
                                    src={images.reactJs}
                                    alt="reactJs 이미지"
                                />
                                <span>React</span>
                            </div>
                            <div>
                                <img src={images.dart} alt="dart 이미지" />
                                <span>Dart</span>
                            </div>
                            <div>
                                <img
                                    src={images.flutter}
                                    alt="flutter 이미지"
                                />
                                <span>Flutter</span>
                            </div>
                        </div>
                        <div className={styles.skills_img_row}>
                            <div>
                                <img src={images.github} alt="github 이미지" />
                                <span>Github</span>
                            </div>
                            <div>
                                <img src={images.git} alt="git 이미지" />
                                <span>Git</span>
                            </div>
                            <div>
                                <img
                                    src={images.bootstrap}
                                    alt="bootstrap 이미지"
                                />
                                <span>Bootstrap</span>
                            </div>
                            <div>
                                <img src={images.figma} alt="figma 이미지" />
                                <span>Figma</span>
                            </div>
                            <div>
                                <img src={images.nodeJs} alt="nodeJs 이미지" />
                                <span>NodeJS</span>
                            </div>
                            <div>
                                <img src={images.mysql} alt="mysql 이미지" />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </PC>
            <Mobile>
                <div id="2" className={styles.skills_wrap}>
                    <h2>🔧 Skills</h2>
                    <hr />
                    <div className={styles.skills_img}>
                        <div className={styles.skills_img_row}>
                            <div>
                                <img src={images.html} alt="html 이미지" />
                                <span>HTML</span>
                            </div>
                            <div>
                                <img src={images.css} alt="css 이미지" />
                                <span>CSS</span>
                            </div>
                            <div>
                                <img src={images.js} alt="js 이미지" />
                                <span>JS</span>
                            </div>
                            <div>
                                <img
                                    src={images.reactJs}
                                    alt="reactJs 이미지"
                                />
                                <span>React</span>
                            </div>
                        </div>
                        <div className={styles.skills_img_row}>
                            <div>
                                <img src={images.dart} alt="dart 이미지" />
                                <span>Dart</span>
                            </div>
                            <div>
                                <img
                                    src={images.flutter}
                                    alt="flutter 이미지"
                                />
                                <span>Flutter</span>
                            </div>
                            <div>
                                <img src={images.github} alt="github 이미지" />
                                <span>Github</span>
                            </div>
                            <div>
                                <img src={images.git} alt="git 이미지" />
                                <span>Git</span>
                            </div>
                        </div>
                        <div className={styles.skills_img_row}>
                            <div>
                                <img
                                    src={images.bootstrap}
                                    alt="bootstrap 이미지"
                                />
                                <span>Bootstrap</span>
                            </div>
                            <div>
                                <img src={images.figma} alt="figma 이미지" />
                                <span>Figma</span>
                            </div>
                            <div>
                                <img src={images.nodeJs} alt="nodeJs 이미지" />
                                <span>NodeJS</span>
                            </div>
                            <div>
                                <img src={images.mysql} alt="mysql 이미지" />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
        </>
    );
};

export default Skills;
