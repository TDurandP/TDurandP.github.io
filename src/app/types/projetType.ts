import { stackType } from "./stackType";
import { descriptionType } from "./descriptionType";

export interface projetType {
    date: number;
    type: string;
    title: string;
    subtitle: string;
    stack: stackType;
    summary: string[];
    description: descriptionType[]
    youtube: string|null
}