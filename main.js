$(".registred").on(click,function(){
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
/////////
$(function(){
  $(".confirm-reserve").on("click", function(){
        var $client=$("#fname").val();
        localStorage.setItem("getvalue",$client);
        window.location.href="allreserv.html"
  })
  document.getElementById("#reserv-span").innerHTML=localStorage.getItem("getvalue")
     
 })
 //////
 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = $(".show");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}