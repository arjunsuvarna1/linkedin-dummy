/*Sign Up Functionality */
function signup(){                                                      
 var firstName =   document.getElementById('firstName').value;
 var lastName = document.getElementById('lastName').value;
 var email =  document.getElementById('email').value;
 var password = document.getElementById('password').value;

 localStorage.setItem('firstName', firstName);
 localStorage.setItem('lastName', lastName);
 localStorage.setItem(firstName+'email', email);
 localStorage.setItem(firstName+'password', password);
}