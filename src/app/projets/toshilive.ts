import { projetType } from "../types/projetType";
import { stackType } from "../types/stackType";
import { descriptionType } from "../types/descriptionType";

const stackTypeToshiLive: stackType = {
    front: ["HTML", "CSS", "TailWind"],
    back: ["Data Twitch API"],
    db: ["API Rest"],
    external: ["Twitch API", "FeatherIcons"]
}
const descPageToshiLive1: descriptionType = {
    paragraphes: [
        "ToshiLive est une web-extension publié sur chrome permettant la supervision d'un influenceur Twitch en temps réel.",
        "Cette extension est pertinente pour obtenir des informations en temps réel sur l'état de la chaine Twitch de l'influenceur. Ainsi, l'utilisateur ne rate aucun direct en recevant une alerte directement via son navigateur.",
        "Outre le système de notification en direct, d'avantages d'informations y sont stockées, telles que le nombre d'abonnées, ou la dernière vidéo disponible en Replay.",
        "Techniquement, j'ai ainsi dû jongler entre mes connaissances du web adapté aux spécifications et limitations des extensions web, mais aussi avec l'API Twitch, très vaste à prendre en main.",
    ],
    index: 0
}

const descPageToshiLive2: descriptionType = {
    paragraphes: [
        "Prise en compte des utilisateurs sur l'application.",
        "Première expérience concrète avec les extensions de navigateurs"
    ],
    index: 1
}

export const toshilive: projetType = {
    date: 2024,
    type: "Extension",
    title: "ToshiLive | L'extension WEB qui t'alertes quand Toshicrow est en direct !",
    subtitle: "Extension de notification Twitch",
    stack: stackTypeToshiLive,
    summary: [
        "Avoir les informations en temps réel d'un influenceur Twtich.",
        "Faire le pont entre une API externe complexe et une supervision graphique sous forme d'extension.",
        "Notification sonore et visuelle via navigateur, actualisation des données d'API récurrent",
        "Accessibilité au site Twitch en un click.",
        "Publication sur le Chrome Web Store"],
    description: [descPageToshiLive1, descPageToshiLive2],
    youtube: "yfLFPUalu1w?si=4sojJeCLsxOF77ux"
}