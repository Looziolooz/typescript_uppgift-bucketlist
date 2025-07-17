// src/variables.ts
import { loadData, saveData, getNewDreamId } from "./utils/storage";
const storedData = loadData();
export let name = storedData.name;
export let dreams = storedData.dreams;
export let themes = storedData.themes;
export const saveAllData = () => {
    saveData({
        name,
        dreams,
        themes
    });
};
export const updateDream = (id, updates) => {
    const index = dreams.findIndex(d => d.id === id);
    if (index !== -1) {
        dreams[index] = Object.assign(Object.assign({}, dreams[index]), updates);
        saveAllData();
    }
};
export const addDream = (newDream) => {
    const dreamWithId = Object.assign(Object.assign({}, newDream), { id: getNewDreamId(dreams) });
    dreams.push(dreamWithId);
    saveAllData();
};
export const deleteDream = (id) => {
    dreams = dreams.filter(d => d.id !== id);
    saveAllData();
};
export const addTheme = (newTheme) => {
    if (!themes.includes(newTheme)) {
        themes.push(newTheme);
        saveAllData();
    }
};
export const deleteTheme = (index) => {
    themes.splice(index, 1);
    saveAllData();
};
//# sourceMappingURL=variables.js.map