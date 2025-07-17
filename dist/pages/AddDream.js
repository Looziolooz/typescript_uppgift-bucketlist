// src/pages/AddDream.ts
import { name, themes, addDream } from "../variables";
const userNameElement = document.getElementById("user-name");
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const themeSelect = document.getElementById("dream-select");
const dreamError = document.getElementById("dream-error-message");
const themeError = document.getElementById("theme-error-message");
// Initialize
userNameElement.textContent = name;
// Populate themes
themeSelect.innerHTML = '<option value="">-- Välj ett tema --</option>';
themes.forEach(theme => {
    const option = document.createElement("option");
    option.value = theme;
    option.textContent = theme;
    themeSelect.appendChild(option);
});
// Form handling
addDreamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    // Validate
    if (!dreamInput.value.trim()) {
        dreamError.style.display = "block";
        isValid = false;
    }
    else {
        dreamError.style.display = "none";
    }
    if (!themeSelect.value) {
        themeError.style.display = "block";
        isValid = false;
    }
    else {
        themeError.style.display = "none";
    }
    if (isValid) {
        addDream({
            name: dreamInput.value.trim(),
            theme: themeSelect.value,
            checked: false
        });
        alert(`"${dreamInput.value.trim()}" har lagts till!`);
        window.location.href = "dashboard.html";
    }
});
//# sourceMappingURL=AddDream.js.map