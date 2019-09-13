/*Sign in functionality */
function signin(){
    var host= window.location.pathname;
    host =host.replace('signin','home');
    var firstName =   document.getElementById('firstName').value;
    var email =  document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email==localStorage.getItem(firstName+'email') && password==localStorage.getItem(firstName+'password')){
        
            window.location =  host;
        
    }
    else{
        window.alert('wrong password or email');
    }
}
document.getElementById('name').innerHTML= firstName + ' ' + localStorage.getItem(firstName+'lastName');