// src/pages/Login.ts
import { name, saveAllData } from "../variables";

const loginForm = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const togglePassword = document.querySelector(".toggle-password") as HTMLButtonElement;
const usernameError = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordError = document.getElementById("password-error-message") as HTMLParagraphElement;

// Toggle password visibility
togglePassword?.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.innerHTML = `
        <img src="../assets/images/${type === 'password' ? 'eye-icon' : 'eye-closed-icon'}.png" 
             alt="Toggle password visibility" />
    `;
});

// Form submission
loginForm?.addEventListener("submit", (e) => {
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