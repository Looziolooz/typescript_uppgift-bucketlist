const STORAGE_KEY = "bucketListData";
const defaultData = {
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
export const loadData = () => {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        return storedData ? JSON.parse(storedData) : defaultData;
    }
    catch (error) {
        console.error("Error loading data:", error);
        return defaultData;
    }
};
export const saveData = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    catch (error) {
        console.error("Error saving data:", error);
    }
};
export const getNewDreamId = (dreams) => {
    if (!dreams || dreams.length === 0)
        return 1;
    return Math.max(...dreams.map(d => d.id)) + 1;
};
//# sourceMappingURL=storage.js.map