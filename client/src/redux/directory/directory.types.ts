export interface IDirectoryItem {
    title: string;
    imageUrl: string;
    id?: string | number | undefined;
    linkUrl: string;
    size?: string;
}

// State type
export interface IDirectoryState {
    sections:IDirectoryItem[];
}