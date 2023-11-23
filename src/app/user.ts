export interface User {
    id: number;
    nomeUtente: string;
    password: string;
    nuovaPassword?: string;
    bloccato: boolean;
    idBanca: number;
}
