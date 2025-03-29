interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    overview: string;
    original_title: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface TrendingMovie{
    searchTerm: string;
    movie_id: number;
    title: string;
    count: number;
    poster_url: string;
}

interface MovieDetails{
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
    runtime: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    genres: KeyValue[];
    budget: number;
    revenue: number;
    production_countries: ProductionCountries[];
}

interface KeyValue {
    id: number;
    name: string;
}

interface ProductionCountries{
    iso_3166_1: string;
    name: string;
}