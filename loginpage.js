

function myFunction(){
    var password1Input = document.getElementById("password1");
    var email1Input = document.getElementById("email1");
    var userName1Input = document.getElementById("username1");
   /*if(email1Input.value == "shaniwisch@gmail.com" && password1Input.value == "1234"){
    window.alert("Hello"+ userName1Input.value + " Welcome to our book site!");
    window.location.href = "homepage.html";
    }
   if(email1Input.value == "test" && password1Input.value == "test"){
     window.alert("Hello " + userName1Input.value+ " Welcome to our book site!");
     window.location.href = "homepage.html";
    }
    
   else{window.alert("Incorrect email or password, try other data");}*/
  
   window.alert("Hello " + userName1Input.value+ " Welcome to our book site!");
   window.alert("");
   main().catch(console.error);
   window.location.href = "homepage.html";
   
}



  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "shaniwisch@gmail.com.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"the book website📚" <shaniwisch@gmail.email>', // sender address
      to: email1Input.value, // list of receivers
      subject: "email from the book website", // Subject line
      text: "Thank you for signing up to our site!Hope you enjoy it❤️", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  

