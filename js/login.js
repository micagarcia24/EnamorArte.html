document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Realiza la validación del usuario y contraseña (aquí se muestra un ejemplo simple)
        if (username === "admi" && password === "1234") {
            // Redirige al usuario a la página deseada
            window.location.href = "index.html";
        } else {
            alert("Usuario o Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
    });
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") 
    {
        passwordInput.type = "text";
        passwordToggle.
        password
         textContent = "Ocultar contraseña";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Mostrar contraseña";
    }
}
document.getElementById("Regisrarse").addEventListener("click", function() {
    // Redirigir a la página 2
    window.location.href = "registrar.html"; 
});