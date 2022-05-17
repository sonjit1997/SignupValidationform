function validation(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value; 

    if(username=="" || username.length>15 || username.length<3)
    {
        alert("User name must be required (3-15 letter)")
        return false;
    }
    
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    {
        alert("Write valid email account")
        return false;
    }
    else if(age<=18 )
    {
        alert("Must be older than 18")
        return false;
    }
    else if(password.length>15 || password.length<3 )
    {
        alert("password should be in between 6-12 character ")
        return false;
    }
    else{
        alert("SignUp Successfull")
    }
    
    
}