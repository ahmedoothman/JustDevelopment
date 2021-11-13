let form = document.querySelector('#form');
let btnlang = document.querySelector('.langBtn');
let title = document.querySelector('#title');
let nametitle = document.querySelector('#name-title');
let passwordtitle = document.querySelector('#password-title');
let forgetquestion = document.querySelector('#forget-question');
let reset = document.querySelector('#reset');
let loginbtn = document.querySelector('.login');
let copyrightsC = document.querySelector('.copyrights');
let copyrights = document.querySelector('#copyrights');
let background = document.querySelector('.login-box');
const mediaQuery = window.matchMedia('(max-width: 900px)');
let lang = "ar";

btnlang.addEventListener("click",function(){
  console.log("btn clicked");
  if(lang == "ar"){
    English();
  }else{
    Arabic();
  }
});

function English() {
lang = "en";
document.body.style.direction="ltr";
form.style.direction = "ltr";
title.innerHTML = "عربي";
nametitle.innerHTML = "UserName";
passwordtitle.innerHTML ="password";
forgetquestion.innerHTML = "Forget password?";
reset.innerHTML ="Reset";
loginbtn.innerHTML="Login";
copyrights.innerHTML = "all copyrights are reserved.osol@2021";
copyrightsC.style.paddingLeft = "50%";
copyrightsC.style.paddingRight = "0%";
background.style.background ="url('../img/home-background-2.png')";
background.style.backgroundSize ="100% 100%";
if(mediaQuery.matches){
  background.style.background ="none";
  copyrightsC.style.paddingLeft = "10%";
  copyrightsC.style.paddingRight = "0%";
}
}

function Arabic() {
lang = "ar";
document.body.style.direction="rtl";
form.style.direction = "rtl";
title.innerHTML = "English";
nametitle.innerHTML = "اسم المستحدم";
passwordtitle.innerHTML ="كلمة المرور";
forgetquestion.innerHTML = "نسيت كلمة السر؟";
reset.innerHTML= "اعادة تعيين";
loginbtn.innerHTML="تسجيل الدخول";
copyrights.innerHTML = "جميع الحقوق محفوظة.اصول@2021";
copyrightsC.style.paddingLeft = "0%";
copyrightsC.style.paddingRight = "35%";
background.style.background ="url('../img/home-background-1.png')";
background.style.backgroundSize ="100% 100%";

if(mediaQuery.matches){
  background.style.background ="none";
  copyrightsC.style.paddingLeft = "0%";
  copyrightsC.style.paddingRight = "15%";
}


}
