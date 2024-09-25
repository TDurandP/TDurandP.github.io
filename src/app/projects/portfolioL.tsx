import { projectType } from "../types/projectType";
import { stackType } from "../types/stackType";

const stackTypePL: stackType = {
    front: "React",
    back: "Next.JS",
    data: "MySQL",
}

export const portfolioLProject: projectType = {
    date: 2024,
    type: "WEB",
    title: "Portfolio | Fin d'études DUT G.M.P",
    subtitle: "Répertoire des projets réalisées au cours des études en GMP d'un étudiant",
    stack: stackTypePL,
    keys: [
        "Réalisation d'un portfolio pour un étudiant en fin d'études de Génie Mécanique et productique.",
        "Mise en place d'une présentation de l'étudiant, mais principalement la consultation des projets",
        "Fonctionnalités afin d'obtenir un résultat adapté : format PDF, projets divisées, pagination.."],
    url: "GBJhPI8gSyY?si=G7oxkNH4YNyz_-_h",
    state: 'terminé',
    public: 'privé'
}