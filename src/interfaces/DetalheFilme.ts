import { Genero } from "./Genero";
import { Produtora } from "./Produtora";

export interface DetalheFilme {
  genres: Genero[];
  poster_path: string;
  production_companies: Produtora[];
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}