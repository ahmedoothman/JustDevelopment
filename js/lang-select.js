const mediaQuery = window.matchMedia("(max-width: 900px)");
let lang = "ar";

// Login page
let form = document.querySelector("#form");
let btnlang = document.querySelector(".langBtn");
let title = document.querySelector("#title");
let nametitle = document.querySelector("#name-title");
let passwordtitle = document.querySelector("#password-title");
let forgetquestion = document.querySelector("#forget-question");
let reset = document.querySelector("#reset");
let loginbtn = document.querySelector(".login");
let copyrightsC = document.querySelector(".copyrights");
let copyrights = document.querySelector("#copyrights");
let background = document.querySelector(".login-box");
let contlogin = document.querySelector(".login-box-content");

//listen to event from language btn
btnlang.addEventListener("click", function() {
  console.log("btn clicked");
  if (lang == "ar") {
    English();
  } else {
    Arabic();
  }
});

// login page the content in english
function English() {
  lang = "en";
  // Login page
  document.body.style.direction = "ltr";
  form.style.direction = "ltr";
  title.innerHTML = "عربي";
  nametitle.innerHTML = "UserName";
  passwordtitle.innerHTML = "password";
  forgetquestion.innerHTML = "Forget password?";
  reset.innerHTML = "Reset";
  loginbtn.innerHTML = "Login";
  copyrights.innerHTML = "all copyrights are reserved.osol@2021";
  copyrightsC.style.paddingLeft = "50%";
  copyrightsC.style.paddingRight = "0%";
  background.style.background = "url('./img/background-2.svg')";
  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "bottom";
  background.style.height = "100%";
  contlogin.style.marginLeft = "11%";
  if (mediaQuery.matches) {
    background.style.background = "white";
    copyrightsC.style.paddingLeft = "2%";
    copyrightsC.style.paddingRight = "0%";
    contlogin.style.marginLeft = "0%";
  }
}
//login page the content in arabic
function Arabic() {
  lang = "ar";
  // Login page
  document.body.style.direction = "rtl";
  form.style.direction = "rtl";
  title.innerHTML = "English";
  nametitle.innerHTML = "اسم المستحدم";
  passwordtitle.innerHTML = "كلمة المرور";
  forgetquestion.innerHTML = "نسيت كلمة السر؟";
  reset.innerHTML = "اعادة تعيين";
  loginbtn.innerHTML = "تسجيل الدخول";
  copyrights.innerHTML = "جميع الحقوق محفوظة.اصول@2021";
  copyrightsC.style.paddingLeft = "0%";
  copyrightsC.style.paddingRight = "35%";
  background.style.background = "url('./img/background-1.svg')";
  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "bottom";

  background.style.height = "100%";

  if (mediaQuery.matches) {
    background.style.background = "white";
    copyrightsC.style.paddingLeft = "0%";
    copyrightsC.style.paddingRight = "5%";
  }
}
