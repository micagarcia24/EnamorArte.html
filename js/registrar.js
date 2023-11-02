document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
   
    if (username === "admi" && password === "1234") {
        // Redirige al usuario a la página deseada
        window.location.href = "bienvenida.html";
    } else {
        alert("Usuario o Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }

    // Aquí puedes agregar la lógica de validación y registro.
});
document.getElementById("Inicio").addEventListener("click", function() {
    // Para ir al Inicio
    window.location.href = "Practico.html"; 
});
