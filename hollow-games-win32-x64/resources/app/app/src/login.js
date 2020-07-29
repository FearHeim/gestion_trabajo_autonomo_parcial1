//Código que permite el logueo
//Se usan los datos del formulario

window.addEventListener('load', game ,false)

function game(){
    const loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', e=>{
        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;
        //Evitamos que se recargue la página
        e.preventDefault();
    
        //Autenticación por medio de firebase auth
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredential=>{
                console.log("Registrado")
                location.href="inicio.html"
            }).catch(function(a) {
                alert("Ocurrió un error, revise sus datos")
                location.reload();
            })
    
        
    })
};

