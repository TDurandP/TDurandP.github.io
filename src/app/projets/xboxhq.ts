import { projetType } from "../types/projetType";
import { stackType } from "../types/stackType";
import { descriptionType } from "../types/descriptionType";

const stackTypeXboxHQ: stackType = {
    front: ["HTML", "CSS", "React", "Three.JS"],
    back: ["Node.JS", "Context"],
    db: ["MySQL", "API Rest"],
    external: ["Ebay API", "Xbox API", "FeatherIcons"]
}
const descPageXboxHQ1: descriptionType = {
    paragraphes: [
        "XboxHQ est un projet personnel mêlant technicité et originalité.",
        "Cette application peut parfaitement se résumer à un gestionnaire de jeux vidéo de la console Xbox 1ère génération, cependant j'ai eu pour objectif principal de le faire de manière la plus complète possible.",
        "Le site se compose ainsi d'un CRUD et d'un système de recherche dans la base de données, mais aussi d'une prévisualisation en 3D de la jaquette de jeu, et également une estimation des prix du marché",
        "Un gros travail de collecte de données (titres, années, images de jaquettes) a été effectué, permettant d'obtenir une base de données très fournie, au plus proche de la perfection.",
    ],
    index: 0
}
const descPageXboxHQ2: descriptionType = {
    paragraphes: [
        "Afin d'ajouter de la profondeur et de l'intérêt à XBOXHQ, un côté 'spéculatif' a été mis en place, notamment en utilisant une API de marketplace permettant de connaitre une moyenne du prix sur le jeu cible, en temps réel.",
        "Cet aspect 'spéculatif' peut également etre améliorer en y ajouter des graphiques financiers ou statistiques.",
        "L'implémentation de la notion 3D sur un site internet grâce à Three.JS ainsi que la modélisation 3D de la jaquette du jeu furent une première bonne expérience que je souhaite renouveler."],
    index: 1
}

export const xboxhq: projetType = {
    date: 2023,
    type: "WEB",
    title: "XboxHQ | Gestion des jeux Xbox 1ère génération",
    subtitle: "Gestion des jeux Xbox 1ère génération",
    stack: stackTypeXboxHQ,
    summary: [
        "Référencer tous les jeux de la première console XBOX. (rétro)",
        "Moduler sa propre librairie et son inventaire.",
        "Avoir le plus grand nombre d'informations sous la main, directement sur XBOXHQ (historique du jeu, développeurs, prix actuel...)",
        "Fonctionnalité de listes et de mises en favoris.",
        "Attractivité renforcée par l'ajout d'un modèle 3D"],
    description: [descPageXboxHQ1, descPageXboxHQ2],
    youtube: "v6mNSHkQPRs?si=OsnvPV1_x_dNZ3z8"
}