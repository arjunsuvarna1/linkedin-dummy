/* Display name of user on homepage*/
var name = sessionStorage.getItem('name');
var serial = sessionStorage.getItem('serial');
document.getElementById("name").innerHTML = "<h2> Hello "+name+" " +localStorage.getItem(name+'lastName')+ "</h2>"; 