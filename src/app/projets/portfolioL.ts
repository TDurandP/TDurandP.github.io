import { projetType } from "../types/projetType";
import { stackType } from "../types/stackType";
import { descriptionType } from "../types/descriptionType";

const stackTypePL: stackType = {
    front: ["HTML", "CSS", "Tailwind", "React"],
    back: ["Next.JS"],
    db: ["MySQL"],
    external: ["Projets"]
}
const descPagePL1: descriptionType = {
    paragraphes: [
        "Ce portfolio a été réalisé à la demande d'un étudiant en fin d'études.",
        "L'objectif était d'avoir une synthèse des projets effectués tout au long du cursus universitaire de l'étudiant, de manière simple et accessible.",
        "L'idée d'un site est donc naturellement venue, permettant notamment le libre accès du portfolio a tout moment.",
    ],
    index: 0
}
const descPagePL2: descriptionType = {
    paragraphes: [
        "Le développement de cette application WEB m'a permis de prendre de l'expérience sur le stack technique que j'utilise principalement. A savoir un full stack javascript.",
        "A la connaissance qu'il s'agissait d'un site sur le thème de Génie Mécanique et Productique, j'ai immédiatement eu à coeur de faire une esthétique particulière.",
        "C'est ainsi que l'on peut voir sur le haut de site, un background d'images de plan en fondu, l'objectif étant de rappeler de suite au visiteur le but précis du portfolio.",
        "Enfin, tout le webdesign de manière général a été pensé pour être très structuré et ordonnée, de manière à correspondre au maximum au domaine industriel mais aussi scolaire.",
        ],
    index: 1
}

export const portfolioL: projetType = {
    date: 2024,
    type: "WEB",
    title: "Portfolio de fin d'études",
    subtitle: "Répertoire des projets réalisées au cours des études en GMP d'un étudiant",
    stack: stackTypePL,
    summary: [
        "Réalisation d'un portfolio pour un étudiant en fin d'études de Génie Mécanique et productique.",
        "L'objectif est de réaliser un site WEB attractif dans le thème du Génie Mécanique et productique, permettant la consultation des principaux projets réalisées par l'étudiant.",
        "Mise en place d'une rapide présentation de l'étudiant, mais principalement la consultation des projets",
        "Développements spécifiques afin d'obtenir une ergonomie accrue lors de l'étude des projets : format PDF embarqué, projets divisées en sous-chapitres, pagination dans les projets.."],
    description: [descPagePL1, descPagePL2],
    youtube: "GBJhPI8gSyY?si=G7oxkNH4YNyz_-_h"
}