import { Model } from '../Model'

export class Movie extends Model {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: Genre[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    belongs_to_collection: Collection;
    spoken_languages: Language;
    production_countries: ProductionCountries;
    genres: Genres[];
    
}

interface Genre {
    id: number;
}

interface Genres {
    id: number;
    name: string;
}

interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface Language {
    iso_639_1: string;
    name: string;
}

interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}