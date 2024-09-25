import { projectType } from "../types/projectType";
import { stackType } from "../types/stackType";


const stackTypeNonogram: stackType = {
    front: "React",
    back: "NextJS",
    data: "SQLite",
}


export const nonogramProject : projectType = {
    date: 2024,
    type: "WEB",
    title: "Nonogram | Création d'un casse-tête",
    subtitle: "Développement de l'application web et de l'algorithme.",
    stack: stackTypeNonogram,
    keys: [
        "Moduler le casse-tête : choix de la taille, et ainsi de la difficulté.",
        "Gestion des effets de bord liés a l'algorithme (éviter les valeurs impossibles, etc..)",
        "Gamification : ajout d'un mode 'challenge' lié a un chronomètre, ajout des statistiques graphiques.."],
    url: "hyFHSVBz3nM?si=F0MqZdlWqp4r8Jrk",
    state: 'terminé',
    public: 'privé'
}

