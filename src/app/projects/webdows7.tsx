import { projectType } from "../types/projectType";
import { stackType } from "../types/stackType";


const stackTypeWebdows7: stackType = {
    front: "React",
    back: "NextJS",
    data: "MySQL"
}

export const webdows7Project: projectType = {
    date: 2024,
    type: "WEB",
    title: "Webdows 7 | Reproduction WEB de l'OS",
    subtitle: "Reproduction Front-End fonctionnelle de l'OS de Microsoft",
    stack: stackTypeWebdows7,
    keys: [
        "Reproduction de Windows 7, version WEB",
        "Moduler sa propre librairie et son inventaire, avec une preview en 3D",
        "Avoir le plus grand nombre d'informations sous la main, directement sur XBOXHQ (historique du jeu, développeurs, prix actuel...)"],
    url: "",
    state: 'en pause',
    public: 'privé'
}