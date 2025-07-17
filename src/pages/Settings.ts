// src/pages/Settings.ts
import { name, themes, saveAllData, addTheme, deleteTheme } from "../variables";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
const themeList = document.getElementById("theme-list") as HTMLUListElement;
const themeInput = document.getElementById("theme-input") as HTMLInputElement;
const saveNameBtn = document.querySelector(".change-name .confirm-input") as HTMLButtonElement;
const addThemeBtn = document.querySelector(".add-theme .confirm-input") as HTMLButtonElement;
const logOutBtn = document.querySelector(".logout") as HTMLButtonElement;

// Initialize
nameInput.value = name;
renderThemes();

function renderThemes(): void {
    themeList.innerHTML = "";
    themes.forEach((theme, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p>${theme}</p>
            <img src="../assets/images/trash_delete.png" 
                 data-index="${index}" alt="Delete theme">
        `;
        themeList.appendChild(li);
    });

    themeList.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", (e) => {
            const index = parseInt((e.target as HTMLImageElement).dataset.index || "0");
            deleteTheme(index);
            renderThemes();
        });
    });
}

// Event listeners
saveNameBtn.addEventListener("click", () => {
    if (nameInput.value.trim()) {
        name = nameInput.value.trim();
        saveAllData();
        alert("Namnet har uppdaterats!");
    }
});

addThemeBtn.addEventListener("click", () => {
    const newTheme = themeInput.value.trim();
    if (newTheme) {
        addTheme(newTheme);
        themeInput.value = "";
        renderThemes();
    }
});

logOutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});