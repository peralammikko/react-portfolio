import photoshop from "../images/svg_skills/photoshop.svg";
import lightroom from "../images/svg_skills/lightroom.svg"
import figma from "../images/svg_skills/figma.svg"
import canva from "../images/svg_skills/canva.svg"
import html from "../images/svg_skills/html.svg"
import css from "../images/svg_skills/css.svg"
import javascript from "../images/svg_skills/javascript.svg"
import react from "../images/svg_skills/react.svg"
import bootstrap from "../images/svg_skills/bootstrap.svg"
import materialui from "../images/svg_skills/materialui.svg"
import git from "../images/svg_skills/git.svg"
import cplusplus from "../images/svg_skills/cplusplus.svg"
import python from "../images/svg_skills/python.svg"
import unity from "../images/svg_skills/unity.svg"
import sql from "../images/svg_skills/sqlite.svg"

/* This is very bad practice and I can't recommend it to anyone,
 but I couldn't find a simple solution to import [image, filename] 
 as a [key, value] combination. It just works, at least for now :D */

export const findSkillImg = (skillName) => {
    const skillLower = skillName.toLowerCase();
    switch (skillLower) {
        case 'photoshop':
            return photoshop;
        case 'lightroom':
            return lightroom;
        case 'figma':
            return figma;
        case 'canva':
            return canva;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'materialui':
            return materialui;
        case 'git':
            return git;
        case 'c++':
            return cplusplus;
        case 'python':
            return python;
        case 'unity':
            return unity;
        case 'sql':
            return sql;
    }
}