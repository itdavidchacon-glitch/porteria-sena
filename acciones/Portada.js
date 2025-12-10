const inicio = document.getElementById('iniciarSesion')
inicio.addEventListener('click', login)

const codigo = document.getElementById('validar1')

const contrasena = document.getElementById('validar2')

function login(){
if(codigo.value === ''  &&  contrasena.value === ''){
    alert('error ')
}else{
    window.open('../src/1interfaz.html')
}
} 
