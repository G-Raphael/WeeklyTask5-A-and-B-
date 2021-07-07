const pswd1 = document.f.p1;
const pswd2 = document.f.p2;
const firstName = document.f.fName;
const lastName = document.f.lName;
const email = document.f.email;
const username = document.f.username;
const submitBtn = document.querySelector("#submit");
var usernamePattern = /^(?=.*\d)(?=.*[!@#$%^&*]).{7,7}$/;
var emailPattern = /^(?=.*[@]).{7,100}$/;
//email.value = 0;
submitBtn.addEventListener('click', function(){
    //preventDefault();
    //console.log(pswd1.value);
    //if (email.value == "") {
      //  alert("email cannot be null");
        
    //}
    if (firstName.value==""&&lastName.value==""&&email.value==""&&username.value==""&&pswd1.value==""&&pswd2.value=="") {
        alert("Blank form cannot be submitted");
        return;
     }
    else if (firstName.value=="") {
        alert("First Name must not be empty");
     }
     else if (lastName.value=="") {
        alert("Last Name must not be empty");
        return;
     }
     else if (email.value=="") {
        alert("Email must not be empty");
        return;
     }
     else if(email.value.match(emailPattern)){
        //alert("username accepted please continue");
        //return false;
    }
     else {
           alert("email must contain @ character example raphael@gmail.com");
        return;
    }
     if (username.value=="") {
        alert("username must not be empty");
        return ;
     }
     else if(username.value.match(usernamePattern)){
        /// alert("username accepted please continue");
         //return false;
     }
     else {
        alert("Error! username must contain atleast a number, a special character such as !@#$%^&* and must not be greater than 6 and less than 8 ")
        return ;
    }
    if (pswd1.value=="") {
        alert("Password must not be empty");
        return ;
     }
     else if (pswd2.value=="") {
        alert("Re-Try Password must not be empty");
        return ;
     }
    else if (firstName.value.length <8) {
        alert("First name must not be less than 8 letters");
        return false;
        
    }
    else if (firstName.value.length >12) {
        alert("First name must not be greater than 12 letters");
        return ;
        
    }
    else if (lastName.value.length <8) {
        alert("Last name cannot be less than 8 letters");
        return;
    }
    else if (lastName.value.length >12) {
        alert("First name cannot be greater than 12 letters");
        return;
    }
    else if (firstName.value == lastName.value) {
        alert("first name and last name cannot be thesame");
        return ;
   }
    else if(pswd1.value !== pswd2.value){
        alert("password did not match");
        return;
    }
    
    else {
        alert('form submitted');
        
    }
}
);