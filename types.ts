export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: URL | string;
    episode: Array<URL | string>;
    url: URL | string;
    created: string;
}

export type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<URL | string>;
    url: URL | string;
    created: string;
}

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<URL | string>;
    url: URL | string;
    created: string;
}