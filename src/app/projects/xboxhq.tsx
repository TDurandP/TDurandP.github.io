import { projectType } from "../types/projectType";
import { stackType } from "../types/stackType";


const stackTypeXboxHQ: stackType = {
    front: "React/ThreeJS",
    back: "Node.JS",
    data: "MySQL"
}

export const xboxhqProject: projectType = {
    date: 2023,
    type: "WEB",
    title: "XboxHQ | Gestion des jeux 1ère gén.",
    subtitle: "Gestion des jeux Xbox 1ère génération",
    stack: stackTypeXboxHQ,
    keys: [
        "Référencer tous les jeux de la première console XBOX. (rétro)",
        "Moduler sa propre librairie et son inventaire, avec une preview en 3D",
        "Avoir un grand nombre d'informations sous la main (historique du jeu, développeurs, prix actuel...)"],
    url: "v6mNSHkQPRs?si=OsnvPV1_x_dNZ3z8",
    state: 'terminé',
    public: 'privé'
}