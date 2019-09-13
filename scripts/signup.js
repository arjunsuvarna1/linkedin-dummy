/*Sign Up Functionality */
function signup(){                                                      
 var firstName =   document.getElementById('firstName').value;
 var lastName = document.getElementById('lastName').value;
 var email =  document.getElementById('email').value;
 var password = document.getElementById('password').value;
   var serial= localStorage.getItem('serial');
   serial = serial+1;
   localStorage.setItem('serial',serial);
 localStorage.setItem(serial+'firstName', firstName);
 localStorage.setItem(firstName+'lastName', lastName);
 localStorage.setItem(firstName+'email', email);
 localStorage.setItem(firstName+'password', password);
}