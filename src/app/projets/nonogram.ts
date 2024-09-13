import { projetType } from "../types/projetType";
import { stackType } from "../types/stackType";
import { descriptionType } from "../types/descriptionType";

const stackTypeNonogram: stackType = {
    front: ["HTML", "CSS", "React"],
    back: ["Next.JS", "Reducer"],
    db: ["SQLite", "API Rest"],
    external: ["FeatherIcons", "FeatherIcons"]
}
const descPageNonogram1: descriptionType = {
    paragraphes: [
        "Nonogram est une web-app simulant un jeu d'énigme : le nonogram",
        "L'application permet ainsi de jouer au jeu du nonogram. A l'accueil d'application, un bref tutoriel est présent.",
        "Le développement de ce casse-tête a surgi pour me permettre de pouvoir jouer au nonogram de manière flexible, et tel que je le concevais : plusieurs niveaux de difficulté, un système de graphiques, mais aussi un mode 'défi'.",
        "La vidéo de ci présente constitue la première version de cette application. J'en suis globalement satisfait puisque outre le développement basique d'une application, toute la partie algorithmique d'un nonogram a dû être comprise mais aussi adaptée pour de l'aléatoire.",    ],
    index: 0
}
const descPageNonogram2: descriptionType = {
    paragraphes: [
        "L'algorithme du casse-tête est ainsi axé sur un aléatoire total, avec une gestion de bord pour permettre d'avoir une cohérence dans la résolution de l'énigme.",
        "Il est possible d'améliorer celui-ci, afin d'avoir des énigmes davantage difficiles, notamment dans les valeurs aléatoires. De plus, il est prévu de peaufiner d'une part l'ergonomie et d'une autre part les différentes options de jeu."
    ],
    index: 1
}

export const nonogram: projetType = {
    date: 2024,
    type: "WEB",
    title: "Nonogram | Création d'un casse-tête",
    subtitle: "Développement de l'application web et de l'algorithme.",
    stack: stackTypeNonogram,
    summary: [
        "Reproduire l'algorithme et le comportement d'un nonogram.",
        "Moduler le casse-tête : choix de la taille, et ainsi de la difficulté.",
        "Gestion des effets de bord liés a l'algorithme (éviter les valeurs impossibles, etc..)",
        "Gamification : ajout d'un mode 'challenge' lié a un chronomètre, ajout des statistiques graphiques..",],
    description: [descPageNonogram1, descPageNonogram2],
    youtube: "hyFHSVBz3nM?si=F0MqZdlWqp4r8Jrk"
}