function sistema() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    function loginResul(e) {
        e.preventDefault();

        const email = form.querySelector('#email');
        const password = form.querySelector('#password');
        seLogin(email.value, password.value);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

    function seLogin(email, password) {
        if (email == "teste@gmail.com" && password == 123) {
            console.log("deu certo");
            redirecionamento();
        } else {
            console.log("erro");
            resultado.innerHTML=`INVALIDO`;
        }
    }

    function redirecionamento() {
        window.location.href = "pages/Home/index.html"
    }
    
    form.addEventListener('submit', loginResul);
}
sistema();