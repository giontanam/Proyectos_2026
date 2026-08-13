const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");

    if(email === "admin@test.com" && password === "1234"){

        mensaje.style.color = "green";
        mensaje.textContent = "Login exitoso";

    }else{

        mensaje.style.color = "red";
        mensaje.textContent = "Credenciales incorrectas";

    }

});