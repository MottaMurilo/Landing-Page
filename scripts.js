function validar(){

  var firstname = form.firstname.value;
  var lastname = form.lastname.value;
  var email = form.email.value;
  var password = form.password.value;

  if(firstname == ""){
    alert('Preencha os campos em vazio!');
    
    return false;
  }

  if(lastname == ""){
    alert('Preencha os campos em vazio!');
    
    return false;
  }

  if(password == ""){
    alert('Preencha os campos em vazio!');
    
    return false;
  }

  if(email == ""){
    alert('Preencha os campos em vazio!');
    
    return false;
  }

}
