/*Sign Up Functionality */
function signup(){                                                      
 var firstName =   document.getElementById('firstName').value;
 var lastName = document.getElementById('LastName').value;
 var email =  document.getElementById('email').value;
 var password = document.getElementById('password').value;

 localStorage.setItem('FirstName', firstName);
 localStorage.setItem('lastName', lastName);
 localStorage.setItem('email', email);
 localStorage.setItem('password', password);
}