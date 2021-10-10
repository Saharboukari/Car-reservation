$(".registred").click(function(){
  var $Email=$("#email").val();
  var $password=$("#pswd").val();
  var $Cpassword=$("#psw-repeat").val();
  if ($Email===""||$password===""||$Cpassword===""){
    alert("please fill all fields..!")
  }
  else if ($password.length<8){
    alert("password too short")
  }
  else if($password!==$Cpassword){
    alert("confirm password")
  }
  function saveDta() {
    localStorage.setItem('email', $Email);
    localStorage.setItem('password', $password);
  }

})
/////////
function resevation(){
        var firstName =document.getElementById("#firstname").value()
        var lastName= document.getElementById("#lastname").value();
        var startDate=document.getElementById("#start").value();
        var backtDate=document.getElementById("#until").value()
        var carModel=document.getElementById("#country").value();
        var client=firstName+lastName;
        var duration=startDate+backtDate;
        var reservation={
          Client:client,
          Duration:duration,
          Car:carModel,
        }
        var res=JSON.stringify(reservation);
       localStorage.setItem(reservation,res);
      console.log(localStorage)
  document.getElementById("#reserv-span").innerHTML=reservation;
     
 }
 //////
