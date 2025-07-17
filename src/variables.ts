// src/variables.ts
import { loadData, saveData, getNewDreamId } from "./utils/storage";
import { StoredData, Dream } from "./types";

const storedData = loadData();

export let name = storedData.name;
export let dreams = storedData.dreams;
export let themes = storedData.themes;

export const saveAllData = (): void => {
    saveData({
        name,
        dreams,
        themes
    });
};

export const updateDream = (id: number, updates: Partial<Dream>): void => {
    const index = dreams.findIndex(d => d.id === id);
    if (index !== -1) {
        dreams[index] = { ...dreams[index], ...updates };
        saveAllData();
    }
};

export const addDream = (newDream: Omit<Dream, 'id'>): void => {
    const dreamWithId = {
        ...newDream,
        id: getNewDreamId(dreams)
    };
    dreams.push(dreamWithId);
    saveAllData();
};

export const deleteDream = (id: number): void => {
    dreams = dreams.filter(d => d.id !== id);
    saveAllData();
};

export const addTheme = (newTheme: string): void => {
    if (!themes.includes(newTheme)) {
        themes.push(newTheme);
        saveAllData();
    }
};

export const deleteTheme = (index: number): void => {
    themes.splice(index, 1);
    saveAllData();
};