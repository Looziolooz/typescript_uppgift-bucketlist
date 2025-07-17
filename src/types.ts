// src/types.ts

export interface Dream {
    id: number;
    name: string;
    theme: string;
    checked: boolean;
}

export interface StoredData {
    name: string;
    dreams: Dream[];
    themes: string[];
}