const mediaQuery = window.matchMedia("(max-width: 900px)");
let lang = "ar";
let arrow_state = "right";
//navbar
let btnlang_1 = document.querySelector(".langBtn_1");
let btnlang_2 = document.querySelector(".langBtn_2");
let groupsdroptitles = document.querySelector(".groupstitle");
let groupsdropticon = document.querySelector(".fa-caret-down");
let lastli = document.querySelector(".nav-item:last-child");
let langtit = document.querySelector(".langtit");
let changepasswordtit = document.querySelector(".change-password");
let signout = document.querySelector(".out");
let sidenav_opt = document.querySelectorAll(".opt");
let arrow_1 = document.querySelector(".toggle-icon");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
let arrow = document.querySelector(".toggle-icon");
let footer = document.querySelector(".footer");
let main_title = document.querySelector(".home-title-sub");
let main_title_side = document.querySelector(".home-title-sub-side");
let groups = document.querySelectorAll(".groups-box");
let alahad = document.querySelectorAll(".alahad");
let users = document.querySelectorAll(".users");
let sites = document.querySelector(".sites");
let osool = document.querySelector(".osool-title");
let reports = document.querySelector(".reports");
let settings = document.querySelector(".settings");
let copyrights = document.querySelector("#copyrights");
let save = document.querySelector(".save");
let back_to_home = document.querySelector(".back-to-home");
let name_ar = document.querySelector(".name-ar");
let name_en = document.querySelector(".name-en");
let em_nm = document.querySelector(".em-nm");
let no_cmr = document.querySelector(".no-cmr");
let no_cme = document.querySelector(".no-cme");
let accordion_button = document.querySelector(".accordion-button");
//listen to event
btnlang_1.addEventListener("click", function() {
  console.log("btn clicked");
  if (lang == "ar") {
    English();
  } else {
    Arabic();
  }
});
btnlang_2.addEventListener("click", function() {
  console.log("btn clicked");
  if (lang == "ar") {
    English();
  } else {
    Arabic();
  }
});

function English() {
  lang = "en";
  document.body.style.direction = "ltr";
  groupsdroptitles.innerHTML = "groups";
  groupsdropticon.style.float = "right";
  langtit.innerHTML = "Language";
  changepasswordtit.innerHTML = "Change password";
  signout.innerHTML = "Signout";
  main_title.innerHTML = "Group details";
  main_title_side.innerHTML = "Main page";
  groups[0].innerHTML = "Groups";
  alahad[0].innerHTML = "Alahd";
  users[0].innerHTML = "Users";
  sites.innerHTML = "Sites";
  osool.innerHTML = "Osool";
  reports.innerHTML = "Reports";
  settings.innerHTML = "Settings";
  copyrights.innerHTML = "all copyrights are reserved.osol@2021";
  save.innerHTML = "Save";
  back_to_home.innerHTML = "Back to menu";
  name_ar.innerHTML = "Name in Arabic";
  name_en.innerHTML = "Name in English";
  em_nm.innerHTML = "Email";
  no_cmr.innerHTML = "Number of requested companies";
  no_cme.innerHTML = "Number of existed companies";
  lastli.style.marginLeft = "0";
  lastli.style.marginRight = "25px";
  for (var i = 0; i < sidenav_opt.length; i++) {
    sidenav_opt[i].style.marginRight = "0px";
    sidenav_opt[i].style.marginLeft = "10px";
  }
  arrow_1.classList.add("english");
  footer.style.background =
    "linear-gradient(-90deg, rgba(35,168,225,1) 18%, rgba(143,206,233,1) 78%)";
  if (arrow_state == "right") {
    arrow_1.src = "./img/arrow-left.png";
    arrow_state = "left";
  } else {
    arrow_1.src = "./img/arrow-right.png";
    arrow_state = "right";
  }
  accordion_button.classList.add("en");
}
/////////////////////////////////////////////////////////////////

function Arabic() {
  lang = "ar";
  document.body.style.direction = "rtl";

  groupsdroptitles.innerHTML = "المجموعة";
  groupsdropticon.style.float = "left";
  langtit.innerHTML = "اللغة";
  changepasswordtit.innerHTML = "تغيير كلمة السر";
  signout.innerHTML = "الخروج عن النظام";
  main_title.innerHTML = "تفاصيل المجموعة";
  main_title_side.innerHTML = " الصفحة الرئيسية";
  groups[0].innerHTML = "المجموعات";
  alahad[0].innerHTML = "العهد";
  users[0].innerHTML = "المستخدمين";
  sites.innerHTML = "المواقع";
  osool.innerHTML = "الاصول";
  reports.innerHTML = "التقارير";
  settings.innerHTML = "الاعدادات";
  copyrights.innerHTML = "جميع الحقوق محفوظة.اصول@2021";
  save.innerHTML = "حفظ";
  back_to_home.innerHTML = "رجوع الي القائمة";
  name_ar.innerHTML = "الاسم بالعربية";
  name_en.innerHTML = "الاسم بالانجليزية";
  em_nm.innerHTML = "البريد الالكتروني";
  no_cmr.innerHTML = "عدد الشركات المطلوبة";
  no_cme.innerHTML = "عدد الشركات الفعلية";
  lastli.style.marginLeft = "25px";
  lastli.style.marginRight = "0px";
  for (var i = 0; i < sidenav_opt.length; i++) {
    sidenav_opt[i].style.marginRight = "10px";
    sidenav_opt[i].style.marginLeft = "0px";
  }
  arrow_1.classList.remove("english");
  footer.style.background =
    "linear-gradient(90deg, rgba(35,168,225,1) 18%, rgba(143,206,233,1) 78%)";
  if (arrow_state == "right") {
    arrow_1.src = "./img/arrow-left.png";
    arrow_state = "left";
  } else {
    arrow_1.src = "./img/arrow-right.png";
    arrow_state = "right";
  }
  accordion_button.classList.remove("en");
}

/////////////////////////
// sidebar responsive
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (arrow_state == "right") {
    arrow.src = "./img/arrow-left.png";
    arrow_state = "left";
  } else {
    arrow.src = "./img/arrow-right.png";
    arrow_state = "right";
  }
});
