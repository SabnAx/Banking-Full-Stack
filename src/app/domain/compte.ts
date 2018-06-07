export interface Compte {
  numero: String;
  proprietaire: String;
  solde: number;
  operations?: any[]; // ? pour dire que c'est optionnel
}
