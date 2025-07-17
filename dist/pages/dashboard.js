// src/pages/Dashboard.ts
import { name, dreams, updateDream, deleteDream } from "../variables";
const userNameElement = document.getElementById("user-name");
const dreamList = document.querySelector(".dream-list");
// Initialize
userNameElement.textContent = name;
renderDreams();
function renderDreams() {
    dreamList.innerHTML = "";
    dreams.forEach(dream => {
        const li = document.createElement("li");
        li.className = "dream-list_item";
        li.innerHTML = `
            <input class="dream-check" type="checkbox" 
                   id="dream-${dream.id}" ${dream.checked ? 'checked' : ''}>
            <label for="dream-${dream.id}">
                ${dream.name}, <span class="dream-theme">${dream.theme}</span>
            </label>
            <button type="button" data-id="${dream.id}">
                <img src="../assets/images/trash_delete.png" alt="Delete">
            </button>
        `;
        dreamList.appendChild(li);
    });
    // Add event listeners
    document.querySelectorAll(".dream-check").forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const id = parseInt(e.target.id.split("-")[1]);
            updateDream(id, { checked: e.target.checked });
        });
    });
    document.querySelectorAll(".dream-list_item button").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = parseInt(e.currentTarget.dataset.id || "0");
            if (confirm("Är du säker på att du vill ta bort denna dröm?")) {
                deleteDream(id);
                renderDreams();
            }
        });
    });
}
//# sourceMappingURL=Dashboard.js.map