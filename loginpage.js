

function myFunction(){
    var password1Input = document.getElementById("password1");
    var email1Input = document.getElementById("email1");
    var userName1Input = document.getElementById("username1");
  if(email1Input.value == "shaniwisch@gmail.com" && password1Input.value == "1234"){
    window.alert("Hello"+ userName1Input.value + " Welcome to our book site!");
    window.location.href = "homepage.html";
  }
  if(email1Input.value == "test" && password1Input.value == "test"){
    window.alert("Hello " + userName1Input.value+ " Welcome to our book site!");
    window.location.href = "homepage.html";
  }
    
  else{window.alert("Incorrect email or password, try other data");}
  }