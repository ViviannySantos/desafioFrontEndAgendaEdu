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
}

interface Genre {
    id: number;
}