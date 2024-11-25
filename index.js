const labels =document.querySelectorAll('label');
labels.forEach(label => {
    label.addEventListener('click', function(){
        const input = label.nextElementSibling;
        input.focus();
    });
});


const nameError= document.getElementById("errorname");
function validateName(){
    const name = document.getElementById("myname" ).value;
    if (name.length == 0){
        nameError.innerHTML = 'name must must be filled';
        return false;
    }
    if(!name.match(/^[A-Za-z\s]+$/)){
        nameError.innerHTML= 'name can only contain letter and spacing'
    
    return false;
}
nameError. innerHTML = "valid";

return true;


};


const usernameError= document.getElementById("errorusername");
function validateUsername(){
    const userName = document.getElementById("myusername" ).value;
    if (userName.length == 0){
        usernameError.innerHTML = '*username must must be filled';
        return false;
    }
    if (userName.length >10){
        usernameError.innerHTML = '*username must must be 10 digit long';
        return false;
    }
    usernameError.innerHTML = ('valid')
    return true;

}

const passError= document.getElementById("errorpass");
function validatePassword(){
    const passWord = document.getElementById("mypass" ).value;
    if (passWord.length == 0){
        passError.innerHTML = '*password must must be filled';
        return false;
    }
    if (passWord.length >10){
        passError.innerHTML = '*password must must be 10 digit long';
        return false;
    }
    const confirmpass= document.getElementById('mypass').value;
    if(confirmpass )
    passError.innerHTML = 'valid';
    return true;
    

}
const cpassError= document.getElementById("errorcpass");
function validatecPassword(){
    //const cpassWord = document.getElementById("mycpass" ).value;
    //if (cpassWord.length == 0){
       // cpassError.innerHTML = '*password must must be filled';
        //return false;
        const confirmpass= document.getElementById('mypass').value;
        const cpassWord = document.getElementById("mycpass" ).value;
    
    if (confirmpass !== cpassWord){
        cpassError.innerHTML = '*password is not maching';
        return false;
    }
    cpassError.innerHTML = 'valid';
    return true;

}
const emailError= document.getElementById("erroremail");
function validateEmail(){
    const emAil = document.getElementById("myemail" ).value;
    if (emAil.length == 0){
        emailError.innerHTML = '*email must must be filled';
        return false;
    }
    if(!emAil.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9 .-]+\.[a-zA-Z]{2,}$/)){
    emailError.innerHTML='not valid';
          return false;
    }
       emailError.innerHTML= 'valid';
       return true;
    
}
const phoneError= document.getElementById("errorphone");
function validatePhone(){
    const phone = document.getElementById("myphone" ).value;
    if (phone.length == 0){
        phoneError.innerHTML = '*phone no must must be filled';
        return false;
    }
    if (phone.length !== 10){
        phoneError.innerHTML = '*phone no should be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = '*phone no must must be filled';
        return false;
    }
    phoneError.innerHTML= 'valid';
    return true;
}

function validateSubmit(){
    
    if (!validateName() || !validateUsername() || !validatePassword() || !validatecPassword() || !validateEmail() || !validatePhone()){
        errorsubmit.innerHTML = '*Please fix issue to submit form';
    
    return false;
    }
    
    errorsubmit.innerHTML ='form is ready to submit';
    return true;
    
     
    

}


const form = document.getElementById('Form');
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const name = document.getElementById('myname').value;
    const username = document.getElementById('myusername').value;
    const email = document.getElementById('myemail').value;
    const pass = document.getElementById('mypass').value;
    const phonenumber = document.getElementById('myphone').value;
    const registration={
        Fullname : name,
        Username : username,
        Email : email,
        Password : pass,
        Phonenumber : phonenumber,

    }
    console.log(registration);

  
});
  

  

