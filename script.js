function validate(){

    document.getElementById('fnameError').innerHTML="";
    document.getElementById('lnameError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('passError').innerHTML="";
    document.getElementById('genderError').innerHTML="";
    document.getElementById('skillError').innerHTML="";
    document.getElementById('cityError').innerHTML="";
  
  
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var gender=document.querySelector('input[name="gen"]:checked');
    var skills=document.querySelectorAll('input[name="skills"]:checked');
    var city=document.getElementById('city').value;
  
    if(fname==""){
      document.getElementById('fnameError').innerHTML="FirsName is required";
      return false;
    }
    if(lname==""){
      document.getElementById('lnameError').innerHTML="LastName is required";
      return false;
    }
    if(email==""){
      document.getElementById('emailError').innerHTML="Email is required";
      return false;
    }
    if(pass==""){
      document.getElementById('passError').innerHTML="Password is required";
      return false;
    }
    if(!gender){
       document.getElementById('genderError').innerHTML="Select Your gender";
      return false;
    }
    if(skills.length==0){
       document.getElementById('skillError').innerHTML="Select at least One skill";
      return false;
    }
    if(city==""){
       document.getElementById('cityError').innerHTML="Select your city";
      return false;
    }
    return true;
  }