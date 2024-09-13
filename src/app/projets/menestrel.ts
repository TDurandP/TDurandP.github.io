import { projetType } from "../types/projetType";
import { stackType } from "../types/stackType";
import { descriptionType } from "../types/descriptionType";

const stackTypeMenestrel: stackType = {
    front: ["HTML", "CSS", "React", "TailWind"],
    back: ["Next.JS", "Context", "TypeScript"],
    db: ["MySQL", "API Rest"],
    external: ["Youtube Data API", "FeatherIcons"]
}
const descPageMenestrel1: descriptionType = {
    paragraphes: [
        "Ménestrel est la dernière application Web actuellement développée en date.",
        "L'objectif y est de centraliser un maximum de formats audio du patrimoine historique ou militaire français. Comme tout monument, il est important d'entretenir et de conserver la culture musicale.",
        "Le site cherche à favoriser l'ergonomie de l'expérience utilisateur en disposant d'animations agréables. La facilité des recherches est également une priorité au travers d'un système de périodes, mais aussi de tags et de filtres, afin de pouvoir accéder à un panel précis de recherches.",
        "Enfin, l'objectif y est également de sensibiliser et de faire apprendre aux utilisateurs. Ainsi, pour chaque chant, le contexte historique, les paroles, mais aussi son origine et ses auteurs et artistes sont visibles en bas de page d'un chant.",
    ],
    index: 0
}
const descPageMenestrel2: descriptionType = {
    paragraphes: [
        "Pour favoriser un maximum la transmission et le partage, une attention particulière a été mise dans le développement des partages sur les réseaux sociaux, ainsi que du partage des artistes ayant interprété ces chants anciens.",
        "À noter qu'un mode Karaoké est en cours de développement, permettant la synchronisation automatique des paroles, ainsi qu'un système de playlist générée selon le chant actuel."
    ],
    index: 1
}

export const menestrel: projetType = {
    date: 2024,
    type: "WEB",
    title: "Ménestrel | Index des chants d'antan",
    subtitle: "Répertoire des chants historiques et militaires du patrimoine français",
    stack: stackTypeMenestrel,
    summary: [
        "Centraliser un maximum de formats audio du patrimoine historique ou militaire français",
        "Favoriser l'ergonomie de l'expérience utilisateur, en disposant d'animations agréables",
        "Précision des recherches au travers d'un système de période, mais aussi de tags et de filtres",
        "Sensibilisation : regroupement des informations pour chaque chant : paroles, origine, contexte, auteurs..",
        "Transmission favorisée, une attention pour le partage sur les réseaux sociaux des chants et artistes.",
        "Retranscription des paroles avec contextualisation et mode karaoké à venir."],
    description: [descPageMenestrel1, descPageMenestrel2],
    youtube: "lZ0hclB2buA?si=QpNVWmINbGi9ekDQ"
}