import { projectType } from "../types/projectType";
import { stackType } from "../types/stackType";

const stackTypeToshiLive: stackType = {
    front: "HTML",
    back: "API Rest",
    data: "Twitch API",
}

export const toshiliveProject: projectType = {
    date: 2024,
    type: "Extension",
    title: "ToshiLive | Extension WEB Twitch",
    subtitle: "Extension de notification Twitch",
    stack: stackTypeToshiLive,
    keys: [
        "Faire le pont entre une API externe complexe et une supervision graphique sous forme d'extension.",
        "Notification sonore et visuelle via navigateur, actualisation des données d'API récurrent",
        "Accessibilité au site Twitch en un click, et facilitation d'accès aux réseaux sociaux concernés"],
    url: "yfLFPUalu1w?si=4sojJeCLsxOF77ux",
    state: 'en pause',
    public: 'public'
}