// src/pages/Login.ts
import { name, saveAllData } from "../variables";
const loginForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");
const usernameError = document.getElementById("username-error-message");
const passwordError = document.getElementById("password-error-message");
// Toggle password visibility
togglePassword === null || togglePassword === void 0 ? void 0 : togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.innerHTML = `
        <img src="../assets/images/${type === 'password' ? 'eye-icon' : 'eye-closed-icon'}.png" 
             alt="Toggle password visibility" />
    `;
});
// Form submission
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    // Reset errors
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    // Validate username
    if (!usernameInput.value.trim()) {
        usernameError.style.display = "block";
        isValid = false;
    }
    // Validate password
    if (passwordInput.value.length < 4) {
        passwordError.style.display = "block";
        isValid = false;
    }
    if (isValid) {
        name = usernameInput.value.trim();
        saveAllData();
        window.location.href = "dashboard.html";
    }
});
//# sourceMappingURL=Login.js.map