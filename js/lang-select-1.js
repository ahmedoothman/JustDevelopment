const mediaQuery = window.matchMedia('(max-width: 900px)');
let lang = "ar";

//navbar
let btnlang_1 = document.querySelector('.langBtn_1');
let btnlang_2 = document.querySelector('.langBtn_2');
let groupsdroptitles = document.querySelector(".groupstitle");
let groupsdropticon = document.querySelector(".fa-caret-down");
let lastli = document.querySelector('.nav-item:last-child');
let langtit = document.querySelector('.langtit');
let changepasswordtit = document.querySelector('.change-password');
let signout = document.querySelector('.out');

//listen to event
btnlang_1.addEventListener("click",function(){
  console.log("btn clicked");
  if(lang == "ar"){
    English();
  }else{
    Arabic();
  }
});
btnlang_2.addEventListener("click",function(){
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

groupsdroptitles.innerHTML ="groups";
groupsdropticon.style.float = "right";
langtit.innerHTML  = "Language";
changepasswordtit.innerHTML  = "Change password";
signout.innerHTML  = "Signout";

lastli.style.marginLeft ="0";
lastli.style.marginRight ="25px";
}
function Arabic() {
lang = "ar";
document.body.style.direction="rtl";

groupsdroptitles.innerHTML ="المجموعات";
groupsdropticon.style.float = "left";
langtit.innerHTML  = "اللغة";
changepasswordtit.innerHTML  = "تغيير كلمة السر";
signout.innerHTML  = "الخروج عن النظام";
lastli.style.marginLeft ="25px";
lastli.style.marginRight ="0px";
}
