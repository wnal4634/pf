import React from "react";
import styles from "css/Skills.module.css";
import styled from "styled-components";

const ColorDiv = styled.div`
    background-color: hsl(${parseInt(Math.random() * 24, 10) * 15}, 16%, 57%);
`;

const Skills = () => {
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>🔧 Skills</h2>
            <hr />
            <div className={styles.row}>
                <div className={styles.skill_title}>
                    <div>MarkUp</div>
                    <div>Language</div>
                    <div>Framework / Library</div>
                    <div>Database</div>
                    <div>Tool</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.skills}>
                        <div style={{ color: `#ff5722` }}>HTML</div>
                        <div style={{ color: `#264de4` }}>CSS</div>
                    </div>
                    <div className={styles.skills}>
                        <div style={{ color: `#CCB100` }}>JS</div>
                        {/* #f7de1f */}
                        <div style={{ color: `#00579c` }}>Dart</div>
                    </div>
                    <div className={styles.skills}>
                        <div style={{ color: `#5ed3f3` }}>React</div>
                        <div style={{ color: `#523b77` }}>Bootstrap</div>
                        <div style={{ color: `#87bf00` }}>NodeJS</div>
                        <div style={{ color: `#51bff0` }}>Flutter</div>
                    </div>
                    <div className={styles.skills}>
                        <div style={{ color: `#005e86` }}>MySQL</div>
                    </div>
                    <div className={styles.skills}>
                        <div style={{ color: `#000000` }}>Github</div>
                        <div style={{ color: `#e84d31` }}>Git</div>
                        <div style={{ color: `#f76e5f` }}>Figma</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
