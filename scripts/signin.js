/*Sign in functionality */
function signin(){
    var email =  document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email==localStorage.getItem('email')){
        if(password==localStorage.getItem('password')){
            window.location('/home.html');
        }
    }
}