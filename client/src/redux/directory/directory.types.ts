export interface IDirectoryItem {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
}

// State type
export interface IDirectoryState {
    sections:IDirectoryItem[];
}