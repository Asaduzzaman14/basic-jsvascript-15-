document.getElementById('login-btn').addEventListener('click', function () {

    let userEmail = document.getElementById('user-email');
    let userPass = document.getElementById('user-pass');
    let email = userEmail.value;
    let pass = userPass.value

    // console.log(email, pass);

    if (email == 'abc12@gmail.com' && pass == 'abcd') {
        window.location.href = 'bank.html'
    }

})

