function validar(){

  var firstname = form.firstname.value;
  var lastname = form.lastname.value;
  var email = form.email.value;
  var password = form.password.value;

  if(firstname == ""){
    alert('fodase');
    
    return false;
  }

  if(lastname == ""){
    alert('fodase');
    
    return false;
  }

}