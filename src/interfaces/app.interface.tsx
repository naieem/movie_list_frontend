export interface IMovie {
    getAllMovie(): Promise<Movie[]>;
}
export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Type: string;
}
