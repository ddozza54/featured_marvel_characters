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



interface Events {
    available: number;
    collectionURI: string;
    items: {
        resourceURI: string;
        name: string;
    }[];
    returned: number;
}

export interface CharacterOrigin {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: Events[];
        returned: number;
    };
    series: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            type: string;
        }[];
        returned: number;
    };
    urls: {
        type: string;
        url: string;
    }[];
}
