let form = document.querySelector('#form');
let btnlang = document.querySelector('.langBtn');
let title = document.querySelector('#title');
let nametitle = document.querySelector('#name-title');
let passwordtitle = document.querySelector('#password-title');
let forgetquestion = document.querySelector('#forget-question');
let reset = document.querySelector('#reset');
let loginbtn = document.querySelector('.login');
let copyrights = document.querySelector('#copyrights');
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
form.style.direction = "ltr";
title.innerHTML = "عربي";
nametitle.innerHTML = "UserName";
passwordtitle.innerHTML ="password";
forgetquestion.innerHTML = "Forget password?";
reset.innerHTML ="Reset";
loginbtn.innerHTML="Login";
copyrights.innerHTML = "all copyrights are reserved.osol@2021";
}

function Arabic() {
lang = "ar";
form.style.direction = "rtl";
title.innerHTML = "English";
nametitle.innerHTML = "اسم المستحدم";
passwordtitle.innerHTML ="كلمة المرور";
forgetquestion.innerHTML = "نسيت كلمة السر؟";
reset.innerHTML= "اعادة تعيين";
loginbtn.innerHTML="تسجيل الدخول";
copyrights.innerHTML = "جميع الحقوق محفوظة.اصول@2021";

}
