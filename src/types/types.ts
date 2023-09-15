interface Thumbnail {
    path: string;
    extension: string;
}

export interface Comic {
    id: number;
    title: string;
    thumbnail: Thumbnail;
}

export interface Character {
    id: number;
    name: string;
    thumbnail: Thumbnail;
    modified: string;
}

export interface Details {
    key: string;
    id: string;
    modified: string;
    name: string;
    thumbnail: Thumbnail;
    description: string;
}

