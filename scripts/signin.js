/*Sign in functionality */
function signin(){
    
    var serial = localStorage.getItem('serial');
    var firstName =   document.getElementById('firstName').value;
    var email =  document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email==localStorage.getItem(firstName+'email') && password==localStorage.getItem(firstName+'password')){
        sessionStorage.setItem('name',firstName);
        sessionStorage.setItem('serial',serial);
        
        var host= window.location.pathname;
        host =host.replace('signin','home');
            window.location =  host;                        //redirect to home page
        
    }
    else{
        window.alert('wrong password or email');
    }
}
