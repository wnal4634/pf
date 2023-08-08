import React from "react";
import styles from "css/Skills.module.css";
import images from "components/ImagesImport";

const Skills = () => {
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>🔧 Skills</h2>
            <hr />
            <div className={styles.skills_img}>
                <div>
                    <img src={images.html} />
                    <img src={images.css} />
                    <img src={images.js} />
                    <img src={images.reactJs} />
                    <img src={images.dart} />
                    <img src={images.flutter} />
                    <img src={images.git} />
                </div>
                <div>
                    <img src={images.github} />
                    <img src={images.bootstrap} />
                    <img src={images.figma} />
                    <img src={images.nodeJs} />
                    <img src={images.mysql} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
