// Función para registrar un nuevo usuario
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    // Obtener los valores ingresados por el usuario
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    // Obtener el elemento de mensaje
    const registerMessage = document.getElementById('registerMessage');
    // Validar que los campos no estén vacíos
    if (name === '' || email === '' || password === '') {
        registerMessage.textContent = 'Todos los campos son obligatorios';
        registerMessage.className = 'error'; // Aplicar estilo de error
        return;
    }
    // Almacenar los datos del usuario en el almacenamiento local del navegador
    localStorage.setItem('registeredName', name);
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    // Mostrar mensaje de éxito
    registerMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
    registerMessage.className = 'success'; // Aplicar estilo de éxito
    // Limpiar el formulario de registro
    document.getElementById('registerForm').reset();
});
// Función para iniciar sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    // Obtener los valores ingresados por el usuario
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    // Obtener el elemento de mensaje
    const loginMessage = document.getElementById('loginMessage');
    // Validar que los campos no estén vacíos
    if (email === '' || password === '') {
        loginMessage.textContent = 'Todos los campos son obligatorios';
        loginMessage.className = 'error'; // Aplicar estilo de error
        return;
    }
    // Obtener los datos del usuario registrado desde el almacenamiento local
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');
    // Validar los datos ingresados
    if (email === registeredEmail && password === registeredPassword) {
        loginMessage.textContent = 'Inicio de sesión exitoso';
        loginMessage.className = 'success'; // Aplicar estilo de éxito
    } else {
        loginMessage.textContent = 'Correo electrónico o contraseña incorrectos';
        loginMessage.className = 'error'; // Aplicar estilo de error
    }
});