const mediaQuery = window.matchMedia('(max-width: 900px)');
let lang = "ar";
let arrow_state = "right";
//navbar
let btnlang_1 = document.querySelector('.langBtn_1');
let btnlang_2 = document.querySelector('.langBtn_2');
let groupsdroptitles = document.querySelector(".groupstitle");
let groupsdropticon = document.querySelector(".fa-caret-down");
let lastli = document.querySelector('.nav-item:last-child');
let langtit = document.querySelector('.langtit');
let changepasswordtit = document.querySelector('.change-password');
let signout = document.querySelector('.out');
let sidenav_opt =document.querySelectorAll(".opt");
let arrow_1 = document.querySelector(".toggle-icon");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
let arrow = document.querySelector(".toggle-icon");
let footer = document.querySelector(".footer");
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
for (var i = 0; i < sidenav_opt.length; i++) {
  sidenav_opt[i].style.marginRight ="0px";
  sidenav_opt[i].style.marginLeft ="10px";
}
arrow_1.style.right = "0px";
arrow_1.style.left = "70%";
footer.style.background = "linear-gradient(-90deg, rgba(35,168,225,1) 18%, rgba(143,206,233,1) 78%)";
if (arrow_state == "right") {
  arrow_1.src = "./img/arrow-left.png";
  arrow_state = "left";
}else{
  arrow_1.src = "./img/arrow-right.png";
  arrow_state = "right";
}
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
for (var i = 0; i < sidenav_opt.length; i++) {
  sidenav_opt[i].style.marginRight ="10px";
  sidenav_opt[i].style.marginLeft ="0px";
}
arrow_1.style.left = "-25px";
arrow_1.style.right = "100px";
footer.style.background = "linear-gradient(90deg, rgba(35,168,225,1) 18%, rgba(143,206,233,1) 78%)"
if (arrow_state == "right") {
  arrow_1.src = "./img/arrow-left.png";
  arrow_state = "left";
}else{
  arrow_1.src = "./img/arrow-right.png";
  arrow_state = "right";
}
}
/////////////////////////
// sidebar responsive
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
  if (arrow_state == "right") {
    arrow.src = "./img/arrow-left.png";
    arrow_state = "left";
  }else{
    arrow.src = "./img/arrow-right.png";
    arrow_state = "right";
  }
});
