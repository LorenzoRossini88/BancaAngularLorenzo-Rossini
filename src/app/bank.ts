import { User } from "./user";

export interface Bank {
    showDetails: boolean;
    nome: string;
    bancheFunzionalita: string[];
    utentis: User;
}
