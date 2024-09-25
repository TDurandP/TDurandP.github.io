import { stackType } from "./stackType";

export interface projectType {
    title: string,
    subtitle: string,
    stack: stackType,
    keys: string[],
    url: string,
    date: number,
    type: string,
    public: "privé"|"public",
    state: "en pause"|"abandonné"|"en cours"|"terminé"
}