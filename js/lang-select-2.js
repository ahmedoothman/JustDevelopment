const mediaQuery = window.matchMedia("(max-width: 900px)");
let lang = localStorage.getItem("lang");
console.log(lang);
function langCheck() {
  if (lang == "en") {
    English();
  } else {
    Arabic();
  }
}
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
let align_opt = document.querySelector(".opt-controller");
let report_problem = document.querySelector(".report-problem");
let request_enhance = document.querySelector(".request-enhance");
let search_holder = document.querySelector(".search-holder");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let opt_t = document.querySelector(".opt-t");
let btn_search = document.querySelector(".btn-search");
let btn_clean = document.querySelector(".btn-clean");
let name_ar = document.querySelector(".name-ar");
let name_en = document.querySelector(".name-en");
let edit_t = document.querySelector(".edit-t");
let status = document.querySelector(".status-t");
let show = document.querySelector(".show");
let show_rest = document.querySelector(".show-rest");
let save = document.querySelector(".save");
let back_to_home = document.querySelector(".back-to-home");
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
  main_title.innerHTML = "Groups List";
  main_title_side.innerHTML = "Main page";
  groups[0].innerHTML = "Groups";
  groups[1].innerHTML = "Groups";
  alahad[0].innerHTML = "Alahd";
  users[0].innerHTML = "Users";
  sites.innerHTML = "Sites";
  osool.innerHTML = "Osool";
  reports.innerHTML = "Reports";
  settings.innerHTML = "Settings";
  copyrights.innerHTML = "all copyrights are reserved.osol@2021";
  report_problem.innerHTML = "Report a problem";
  request_enhance.innerHTML = "Request enhancement";
  search_holder.placeholder = "Search";
  opt_t.innerHTML = "Choose";
  from.innerHTML = "from";
  to.innerHTML = "to";
  btn_search.innerHTML = "Search";
  btn_clean.innerHTML = "Clean";
  name_ar.innerHTML = "Name in Arabic";
  name_en.innerHTML = "Name in English";
  edit_t.innerHTML = "Edit";
  status.innerHTML = "Status";
  show.innerHTML = "Show";
  show_rest.innerHTML = "rows from 200 row";
  save.innerHTML = "Save";
  back_to_home.innerHTML = "Back to menu";
  lastli.style.marginLeft = "0";
  lastli.style.marginRight = "25px";
  align_opt.style.textAlign = "left";
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
  localStorage.setItem("lang", "en");
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
  main_title.innerHTML = "قائمة بالمجموعات";
  main_title_side.innerHTML = " الصفحة الرئيسية";
  groups[0].innerHTML = "المجموعات";
  groups[1].innerHTML = "المجموعات";
  alahad[0].innerHTML = "العهد";
  users[0].innerHTML = "المستخدمين";
  sites.innerHTML = "المواقع";
  osool.innerHTML = "الاصول";
  reports.innerHTML = "التقارير";
  settings.innerHTML = "الاعدادات";
  copyrights.innerHTML = "جميع الحقوق محفوظة.اصول@2021";
  report_problem.innerHTML = "الابلاغ عن المشكلة؟";
  request_enhance.innerHTML = "طلب تحسين";
  search_holder.placeholder = "بحث";
  opt_t.innerHTML = "اختر";
  from.innerHTML = "من";
  to.innerHTML = "الي";
  btn_search.innerHTML = "بحث";
  btn_clean.innerHTML = "تفريغ";
  name_ar.innerHTML = "الاسم بالعربية";
  name_en.innerHTML = "الاسم بالانجليزية";
  edit_t.innerHTML = "تعديل";
  status.innerHTML = "حالة التدقيق";
  show.innerHTML = "عرض";
  show_rest.innerHTML = "صفوف من 200 صف";
  save.innerHTML = "حفظ";
  back_to_home.innerHTML = "رجوع الي القائمة";
  lastli.style.marginLeft = "25px";
  lastli.style.marginRight = "0px";
  align_opt.style.textAlign = "right";

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
  localStorage.setItem("lang", "ar");
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
