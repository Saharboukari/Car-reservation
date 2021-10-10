$("registred").on(click,function(){
  var Email=$("#email").val();
  var password=$("#pswd").val();
  var Cpassword=$("#psw-repeat").val();
  if (Email===""||password===""||Cpassword===""){
    alert("please fill all fields..!")
  }
  else if (password.length<8){
    alert("password too short")
  }
  else if(password!==Cpassword){
    alert("confirm password")
  }
  function saveDta() {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }
})