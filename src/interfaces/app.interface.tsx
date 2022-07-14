import { IPaginate } from "./IPaginate.interface";

export interface IMovie {
    getAllMovie(payload:IPaginate): Promise<Movie[]>;
}
export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Type: string;
}
