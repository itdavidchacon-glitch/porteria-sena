// Script de autenticación - Portada
document.addEventListener('DOMContentLoaded', function() {
    const btnIniciar = document.getElementById('iniciarSesion')
    const inputCodigo = document.getElementById('validar1')
    const inputPassword = document.getElementById('validar2')

    if (btnIniciar) {
        btnIniciar.addEventListener('click', function(e) {
            e.preventDefault()
            
            const codigo = inputCodigo?.value.trim() || ''
            const password = inputPassword?.value.trim() || ''

            if (!codigo || !password) {
                alert('Por favor ingresa código y contraseña')
                return
            }

            // Navegar a la otra página
            window.location.href = '/src/1interfaz.html'
        })
    }
}) 
