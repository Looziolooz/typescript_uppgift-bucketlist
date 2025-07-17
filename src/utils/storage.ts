// src/utils/storage.ts
import { StoredData, Dream } from "../types";

const STORAGE_KEY = "bucketListData";

const defaultData: StoredData = {
    name: "NAMN",
    dreams: [
        {
            id: 1,
            name: "Lära mig HTML/CSS",
            theme: "teknikdrömmar",
            checked: true
        },
        {
            id: 2,
            name: "Lära mig TypeScript",
            theme: "teknikdrömmar",
            checked: false
        },
        {
            id: 3,
            name: "En dröm som tar flera rader lorem ipsum",
            theme: "vardagsdrömmar",
            checked: false
        }
    ],
    themes: ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"]
};

export const loadData = (): StoredData => {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        return storedData ? JSON.parse(storedData) : defaultData;
    } catch (error) {
        console.error("Error loading data:", error);
        return defaultData;
    }
};

export const saveData = (data: StoredData): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving data:", error);
    }
};

export const getNewDreamId = (dreams: Dream[]): number => {
    if (!dreams || dreams.length === 0) return 1;
    return Math.max(...dreams.map(d => d.id)) + 1;
};