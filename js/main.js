/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_3__);




var init = false;
var swiper = Swiper;

function swiperMode() {
  var mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false
        },
        // Настройки Swiper
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        spaceBetween: 16
      });
    }
  }
}
/* On Load **************************************************************/


window.addEventListener("load", function () {
  swiperMode();
});
/* On Resize **************************************************************/

window.addEventListener("resize", function () {
  swiperMode();
});
var buttonImg = document.querySelector("#button__img");
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Скрыть";
    buttonImg.classList.toggle("active");
  } else {
    buttonImg.classList.toggle("active");
    btn.textContent = "Показать всё";
  }

  content.classList.toggle("hidden");
}
/* BURGER
 **************************************************************/


var button = document.querySelector(".burger__open");
var blockMenu = document.querySelector(".burger");
var buttonClose = document.querySelector(".burger__close");
var burgerOverlay = document.querySelector(".burger__overlay");

function closeClick1() {
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".burger")) {
      blockMenu.classList.remove("open");
    }
  });
}

button.addEventListener("click", function () {
  blockMenu.classList.add("open");
  closeClick1(); // вызов функции
});
buttonClose.addEventListener("click", function () {
  blockMenu.classList.remove("open");
});
button.addEventListener("click", function (event) {
  event.stopPropagation(); // остановит всплытие события дальше

  blockMenu.classList.add("open");
  closeClick1();
});
burgerOverlay.addEventListener("click", function () {
  blockMenu.classList.remove("open");
});
/* REPAIR
 **************************************************************/

var buttonImgRepair = document.querySelector("#button__img--repair");
var btnRepair = document.querySelector(".btn__repair");
var contentRepair = document.querySelector(".content__repair");
btnRepair.addEventListener("click", btnClickRepair);

function btnClickRepair() {
  console.log(contentRepair.classList);

  if (contentRepair.classList.contains("hid")) {
    btnRepair.textContent = "Скрыть";
    buttonImgRepair.classList.toggle("act");
  } else {
    buttonImgRepair.classList.toggle("act");
    btnRepair.textContent = "Показать всё";
  }

  contentRepair.classList.toggle("hid");
}
/* CALL
 **************************************************************/


var buttonCall = document.querySelector(".call__open");
var buttonCal = document.querySelector(".menu__open");
var blockOpen = document.querySelector(".contact");
var buttonCloseCall = document.querySelector(".call__close");
var callOverlay = document.querySelector(".contact__overlay");

function closeButton() {
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".contact")) {
      blockOpen.classList.remove("open-contact");
    }
  });
}

buttonCall.addEventListener("click", function () {
  blockOpen.classList.add("open-contact");
  closeButton(); // вызов функции
});
buttonCloseCall.addEventListener("click", function () {
  blockOpen.classList.remove("open-contact");
});
buttonCall.addEventListener("click", function (event) {
  event.stopPropagation(); // остановит всплытие события дальше

  blockOpen.classList.add("open-contact");
  closeButton();
});
buttonCal.addEventListener("click", function (event) {
  event.stopPropagation(); // остановит всплытие события дальше

  blockOpen.classList.add("open-contact");
  closeButton();
});
callOverlay.addEventListener("click", function () {
  blockOpen.classList.remove("open-contact");
});
/* MESSAGE
 **************************************************************/

var buttonContact = document.querySelector(".contact__open");
var buttonContac = document.querySelector(".menu__open-2");
var openContact = document.querySelector(".contact");
var buttonCloseContact = document.querySelector(".contact__close");
var messageOverlay = document.querySelector(".contact__overlay");

function closeContact() {
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".contact__masage")) {
      openContact.classList.remove("open-contact");
    }
  });
}

buttonContact.addEventListener("click", function () {
  openContact.classList.add("open-contact");
  closeContact(); // вызов функции
});
buttonCloseContact.addEventListener("click", function () {
  openContact.classList.remove("open-contact");
});
buttonContact.addEventListener("click", function (event) {
  event.stopPropagation(); // остановит всплытие события дальше

  openContact.classList.add("open-contact");
  closeContact();
});
buttonContac.addEventListener("click", function (event) {
  event.stopPropagation(); // остановит всплытие события дальше

  openContact.classList.add("open-contact");
  closeContact();
});
messageOverlay.addEventListener("click", function () {
  openContact.classList.remove("open-contact");
}); ///////////////////////

var mainImg = document.querySelector("#main__link-img");
var mainBtn = document.querySelector(".main__link-title");
var text = document.querySelector(".main__span--320");
mainBtn.addEventListener("click", mainBtnClick);

function mainBtnClick() {
  console.log(text.classList);

  if (text.classList.contains("hidden__text")) {
    mainBtn.textContent = "Скрыть";
    mainImg.classList.toggle("active__main");
  } else {
    mainImg.classList.toggle("active__main");
    mainBtn.textContent = "Показать всё";
  }

  text.classList.toggle("hidden__text");
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/burgerburger.svg */ "./icon/burgerburger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/Group2.svg */ "./icon/Group2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/callcall.svg */ "./icon/callcall.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/chatchat.svg */ "./icon/chatchat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/profileпрофиль.svg */ "./icon/profileпрофиль.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/repairrepair.svg */ "./icon/repairrepair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/checkstatussearch.svg */ "./icon/checkstatussearch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/burger.png */ "./icon/burger.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/search.svg */ "./icon/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/expand.svg */ "./img/swiper/expand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/CPS.jpg */ "./img/CPS.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapLenovo.svg */ "./img/swiper/BitmapLenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/go.png */ "./img/swiper/go.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/Bitmapsamsung.svg */ "./img/swiper/Bitmapsamsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/Bitmapapple.svg */ "./img/swiper/Bitmapapple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapView.svg */ "./img/swiper/BitmapView.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapBOSCH.svg */ "./img/swiper/BitmapBOSCH.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapHP.svg */ "./img/swiper/BitmapHP.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapACER.svg */ "./img/swiper/BitmapACER.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapSONY.svg */ "./img/swiper/BitmapSONY.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/massage/Group 10.png */ "./img/massage/Group 10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/massage/Lineline.svg */ "./img/massage/Lineline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/massage/отправить.png */ "./img/massage/отправить.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css\"\r\n    />\r\n    <title>I'TM SPACE PRacti</title>\r\n  </head>\r\n  <body>\r\n    <header class=\"header\">\r\n        <div class=\"header__inner\">\r\n          <div class=\"header__menu\">\r\n            <nav class=\"menu\">\r\n              <button class=\"burger__open\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n              </button>\r\n            </nav>\r\n            <div class=\"header__highlight\"></div>\r\n            <div class=\"logo\">\r\n              <a class=\"logo__link\" href=\"#\">\r\n                <img\r\n                  class=\"logo__link--img\"\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                  alt=\"Логотип\"\r\n                />\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"header__tools\">\r\n            <img class=\"menu__open\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"  alt=\"repair\" />\r\n            <img class=\"menu__open-2\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"repair\" />\r\n            <img\r\n              class=\"menu__hiden\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n              alt=\"repair\"\r\n            />\r\n            <div class=\"header__partition\"></div>\r\n            <nav class=\"menu\">\r\n              <a href=\"#\" class=\"menu__repair\"\r\n                ><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Настройки\"\r\n              /></a>\r\n            </nav>\r\n            <nav class=\"menu\">\r\n              <a href=\"#\" class=\"menu__search\"\r\n                ><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Поиск\"\r\n              /></a>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <div class=\"burger\">\r\n      <div class=\"burger__container\">\r\n        <div class=\"burger__wrapper\">\r\n          <div class=\"burger__wrapper--head\">\r\n            <button class=\"burger__close\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" />\r\n            </button>\r\n            <div class=\"burger__wrapper--logo\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип\" />\r\n            </div>\r\n            <div class=\"burger__wrapper--icon\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Поиск\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"burger__menu\">\r\n          <div class=\"burger__driver\"></div>\r\n          <button class=\"button burger__button\">Ремонт техники</button>\r\n          <button class=\"button burger__button\">Услуги и сервисы</button>\r\n          <button class=\"button burger__button\">Корпоративным клиентам</button>\r\n          <button class=\"button burger__button\">Продавцам техники</button>\r\n          <button class=\"button burger__button\">Партнерам</button>\r\n          <button class=\"button burger__button\">Производителям</button>\r\n          <button class=\"button burger__button\">Наши сервисные центры</button>\r\n          <button class=\"button burger__button\">Контакты</button>\r\n        </div>\r\n        <div class=\"burger__footer\">\r\n          <div class=\"burger__footer--icon\">\r\n            <button class=\"call__open\"> <img\r\n              class=\"burger__footer--icon1\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n              alt=\"Телефон\"\r\n            /></button>\r\n           <button class=\"contact__open\">\r\n            <img\r\n              class=\"burger__footer--icon2\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n              alt=\"СМС\"\r\n            />\r\n          </button>\r\n            <img\r\n              class=\"burger__footer--icon3\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n              alt=\"Профиль\"\r\n            />\r\n          </div>\r\n          <div class=\"footer__contacts\">\r\n            <a class=\"footer__mail\" href=\"#\">mail@cps.com\" <br /></a>\r\n            <a class=\"footer__phone\" href=\"#\">8 800 890 8900</a>\r\n          </div>\r\n          <div class=\"lang\">\r\n            <button class=\"lang__button\">RU</button>\r\n            <button class=\"lang__button\">EN</button>\r\n            <button class=\"lang__button\">CH</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"burger__overlay\"></div>\r\n    </div>\r\n\r\n    <section class=\"main\">\r\n      <div class=\"main__driver\"></div>\r\n      <div class=\"container\">\r\n        <div class=\"main__servis\">\r\n          <h2 class=\"main__title\">Услуги и сервисы</h2>\r\n          <div class=\"main__items\">\r\n            <div class=\"main__item\">\r\n              <div class=\"main__item-title\">\r\n                Оставить заявку\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Настройки\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"main__item\">\r\n              <div class=\"main__item-title\">\r\n                Статус ремонта\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Поиск\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <nav class=\"main__menu\">\r\n          <div class=\"scrool\">\r\n            <button class=\"scrool__button\">Ремонтируемые бренды</button>\r\n            <button class=\"scrool__button\">Ремонтируемые устройства</button>\r\n            <button class=\"scrool__button\">Цены на услуги</button>\r\n            <button class=\"scrool__button\">Адреса сервесных центров</button>\r\n            <button class=\"scrool__button\">Специальные цены</button>\r\n            <button class=\"scrool__button\">Отзывы</button>\r\n          </div>\r\n        </nav>\r\n      </div>\r\n      <div class=\"main__wrapper\">\r\n        <div class=\"main__content\">\r\n          <div class=\"main__text\">\r\n            <p class=\"main__text-320\">\r\n              Мы являемся авторизованным сервисным центром по ремонту техники\r\n              Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\r\n              официальной гарантией производителя. <span class=\"main__span--320 hidden__text\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro aliquid reprehenderit sint, est error. Eos alias fuga odit sit ducimus cupiditate id expedita tempore, sapiente consequuntur repudiandae a vel soluta laudantium tenetur, ad quas! Sint, esse. Debitis, dignissimos nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro aliquid reprehenderit sint, est error. Eos alias fuga odit sit ducimus cupiditate id expedita tempore, sapiente consequuntur repudiandae a vel soluta laudantium tenetur, ad quas! Sint, esse. Debitis, dignissimos nemo.</span>\r\n            </p>\r\n            <p class=\"main__text-768\">\r\n              Мы успешно работаем с 1992 года и заслужили репутацию надежного\r\n              партнера<span class=\"main__text-1120\"\r\n                >,что к нам обращаются по рекомендациям и, в свою очередь,\r\n                советуют нас родным и близким.</span\r\n              >\r\n            </p>\r\n            <div class=\"btn__text\">\r\n              <img id=\"main__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\r\n              <button class=\"main__link-title\" type=\"button\">Показать всё</button>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n        <img class=\"main__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"CPS\" />\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"brands\">\r\n      <div class=\"brands__title\">\r\n        ремонт техники различных брендов\r\n      </div>\r\n      <div class=\"container__card\">\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper brands__swiper\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper brands__wrapper\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"леново\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"samsung\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"apple\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\" >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Viev\"  />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\"  >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"BOSCH\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container\"              >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"HP\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide\">\r\n              <div class=\"brands__container--1\"   >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"ACER\"/>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide \" >\r\n              <div class=\"brands__container--2\" >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"sony\"  />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide \">\r\n              <div class=\"brands__container--3\"  id=\"brands__id--3\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"леново\"/>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide \"  >\r\n              <div class=\"brands__container--4\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"samsung\"/>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide brands__slide \">\r\n              <div class=\"brands__container--5\" >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"apple\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination brands__pagination\"></div>\r\n          <div class=\"content hidden\">\r\n            <div class=\"swiper-wrapper-hidden\">\r\n              <div class=\"container__card--hidden\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"ACER\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n              <div class=\"container__card--hidden\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"sony\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n              <div class=\"container__card--hidden\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"леново\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n              <div class=\"container__card--hidden\" >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"samsung\"  />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n              <div class=\"container__card--hidden\" >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"apple\" />\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"пояснение\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn__ho\">\r\n            <img id=\"button__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\r\n            <button class=\"btn\" type=\"button\">Показать всё</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"repair\">\r\n      <div class=\"repair__title\">\r\n        Ремонт различных видов техники\r\n      </div>\r\n  <div class=\"container__card--repair\">\r\n    <!-- Slider main container -->\r\n<div class=\"swiper repair__swiper\">\r\n  <!-- Additional required wrapper -->\r\n  <div class=\"swiper-wrapper repair__wrapper\">\r\n    <!-- Slides -->\r\n    <div class=\"swiper-slide repair__slide\">\r\n    <div class=\"repair__container\">Ремонт ноутбуков\r\n      <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"swiper-slide repair__slide\">\r\n    <div class=\"repair__container\">Ремонт планшетов\r\n      <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"swiper-slide repair__slide\">\r\n    <div class=\"repair__container\">Ремонт мониторов\r\n      <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"swiper-slide repair__slide\">\r\n    <div  class=\"repair__container--1\" >Ремонт колонок\r\n      <img class=\"swiper__img--1\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"  >\r\n    </div>\r\n  </div>\r\n    <div class=\"swiper-slide repair__slide\">\r\n    <div  class=\"repair__container--2\" >Ремонт досок\r\n      <img class=\"swiper__img--1\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"  >\r\n    </div>\r\n  </div>\r\n    <div class=\"swiper-slide repair__slide\">\r\n    <div  class=\"repair__container--3\" >Ремонт колонок\r\n      <img class=\"swiper__img--1\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"  >\r\n    </div>\r\n  </div>\r\n    <div class=\"swiper-slide repair__slide\">\r\n    <div  class=\"repair__container--4\" >Ремонт мышек\r\n      <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"  >\r\n    </div>\r\n    </div>\r\n    <div class=\"swiper-slide repair__slide\">\r\n    <div  class=\"repair__container--5\" >Ремонт телефонов\r\n      <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"  >\r\n    </div>\r\n  </div>\r\n  </div>\r\n    <!-- If we need pagination -->\r\n    <div class=\"swiper-pagination repair__pagination\"></div>\r\n    <div class=\"content__repair hid \">\r\n      <div class=\"repair__hidden\">\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"container__repair--hidden\">\r\n          <div class=\"repair__container--card\">Ремонт планшетов\r\n            <img class=\"swiper__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"btn__ho-repair\">\r\n      <img id=\"button__img--repair\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\r\n      <button class=\"btn__repair\" type=\"button\">Показать всё</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n    <div class=\"price\">\r\n      <div class=\"price__title\">\r\n        Цены на услуги\r\n      </div>\r\n  <div class=\"container__card--price\">\r\n    <div class=\"price__head\">\r\n    <div class=\"price__head--service\">Ремонтные услуги</div>\r\n    <div class=\"price__head--cost\">Цена</div>\r\n    <div class=\"price__head--time\">Срок</div>\r\n  </div>\r\n    <!-- Slider main container -->\r\n<div class=\"swiper price__swiper\">\r\n  <!-- Additional required wrapper -->\r\n  <div class=\"swiper-wrapper price__wrapper\">\r\n    <!-- Slides -->\r\n    <div class=\"swiper-slide price__slide\">\r\n    <div class=\"price__service\">Тестирование с выдачей технического заключения</div>\r\n    <div class=\"price__cost\">1 000 ₽</div>\r\n    <div class=\"price__order\"> \r\n      <div class=\"price__time\">30-120 мин</div>\r\n      <img class=\"price__button\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n  </div>\r\n  </div>\r\n    <div class=\"swiper-slide price__slide\">\r\n    <div class=\"price__service\">Диагностика</div>\r\n    <div class=\"price__cost\">Бесплатно</div>\r\n    <div class=\"price__order\"> \r\n      <div class=\"price__time\">30 мин</div>\r\n      <img class=\"price__button\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n  </div>\r\n  </div>\r\n    <div class=\"swiper-slide price__slide\">\r\n    <div class=\"price__service\">Замена дисплея</div>\r\n    <div class=\"price__cost\">1 000 ₽</div>\r\n    <div class=\"price__order\"> \r\n      <div class=\"price__time\">30-120 мин</div>\r\n      <img class=\"price__button\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n  </div>\r\n  </div>\r\n    <div class=\"swiper-slide price__slide\">\r\n    <div class=\"price__service\">Замена полифонического динамика</div>\r\n    <div class=\"price__cost\">1 000 ₽</div>\r\n    <div class=\"price__order\"> \r\n      <div class=\"price__time\">30-120 мин</div>\r\n      <img class=\"price__button\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n  </div>\r\n  </div>\r\n    <div class=\"swiper-slide price__slide\">\r\n    <div class=\"price__service\">Замена программного обеспечения</div>\r\n    <div class=\"price__cost\">1 000 ₽</div>\r\n    <div class=\"price__order\"> \r\n      <div class=\"price__time\">30-120 мин</div>\r\n      <img class=\"price__button\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n  </div>\r\n  </div>\r\n    </div>\r\n       <!-- If we need pagination -->\r\n       <div class=\"swiper-pagination price__pagination\"></div>\r\n  </div>\r\n  <p class=\"price__text\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>\r\n <div class=\"price__link\">\r\n  <a href=\"#\">\r\n    Комерческое предложение <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\">\r\n  </a>\r\n </div> \r\n</div>\r\n  </div>  \r\n\r\n<div class=\"footer\">\r\n  <div class=\"footer__info\">\r\n    <div class=\"footer__team\">© 2019 CPS <br>\r\n      Разработано командой Apesong </div>\r\n      <div class=\"footer__confidenc\">Политика конфиденциальности</div>\r\n      <div class=\"footer__confidentiality\">Информация, размещенная на данной странице, не является публичной офертой</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"contact contact__call\">\r\n  <div class=\"contact__service\">\r\n<button class=\"call__close\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" /></button>\r\n<div class=\"burger__driver-close\"></div>\r\n<div class=\"call_reciev\"><h2 >Заказать звонок</h2></div>\r\n\r\n<div class=\"input\">  \r\n  <input class=\"input__call\"  type=\"Телефон\"placeholder=\"Телефон\">\r\n</div>\r\n<p class=\"call__text\">Нажимая “отправить”, вы даете согласие на <span class=\"span__call\">обработку персональных данных</span> и соглашаетесь с нашей <span class=\"span__call\">политикой конфиденциальности</span></p>\r\n<div class=\"image-container\">\r\n  <img class=\"send\" src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"отправить\">\r\n</div>\r\n</div>\r\n<div class=\"contact__overlay\"></div>\r\n</div>  \r\n\r\n<div class=\"contact contact__masage\">\r\n  <div class=\"contact__service\">\r\n    <button class=\"contact__close\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" /></button>\r\n<div class=\"burger__driver-close\"></div>\r\n<h2 class=\"call_reciev\">Обратная связь</h2>\r\n<div class=\"input\"> \r\n  <input class=\"input__call\" type=\"Имя\" placeholder=\"Имя\">\r\n  <input class=\"input__call\" type=\"Телефон\"placeholder=\"Телефон\">\r\n  <input class=\"input__call\" type=\"Электронная почта\"placeholder=\"Электронная почта\">\r\n  <input class=\"input__call1\"  type=\"Сообщение\"placeholder=\"Сообщение\">\r\n</div>\r\n<p class=\"contant__text\">Нажимая “отправить”, вы даете согласие на <span class=\"span__call\">обработку персональных данных</span> и соглашаетесь с нашей <span class=\"span__call\">политикой конфиденциальности</span></p>\r\n<div class=\"image-container\">\r\n  <img class=\"send\" src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"отправить\">\r\n</div>\r\n\r\n</div>\r\n<div class=\"contact__overlay\"></div>\r\n</div>\r\n\r\n    <script src=\"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js\"></script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./icon/Group2.svg":
/*!*************************!*\
  !*** ./icon/Group2.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group2.svg";

/***/ }),

/***/ "./icon/burger.png":
/*!*************************!*\
  !*** ./icon/burger.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.png";

/***/ }),

/***/ "./icon/burgerburger.svg":
/*!*******************************!*\
  !*** ./icon/burgerburger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burgerburger.svg";

/***/ }),

/***/ "./icon/callcall.svg":
/*!***************************!*\
  !*** ./icon/callcall.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/callcall.svg";

/***/ }),

/***/ "./icon/chatchat.svg":
/*!***************************!*\
  !*** ./icon/chatchat.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chatchat.svg";

/***/ }),

/***/ "./icon/checkstatussearch.svg":
/*!************************************!*\
  !*** ./icon/checkstatussearch.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatussearch.svg";

/***/ }),

/***/ "./icon/profileпрофиль.svg":
/*!*********************************!*\
  !*** ./icon/profileпрофиль.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profileпрофиль.svg";

/***/ }),

/***/ "./icon/repairrepair.svg":
/*!*******************************!*\
  !*** ./icon/repairrepair.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repairrepair.svg";

/***/ }),

/***/ "./icon/search.svg":
/*!*************************!*\
  !*** ./icon/search.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/CPS.jpg":
/*!*********************!*\
  !*** ./img/CPS.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/CPS.jpg";

/***/ }),

/***/ "./img/massage/Group 10.png":
/*!**********************************!*\
  !*** ./img/massage/Group 10.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group 10.png";

/***/ }),

/***/ "./img/massage/Lineline.svg":
/*!**********************************!*\
  !*** ./img/massage/Lineline.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Lineline.svg";

/***/ }),

/***/ "./img/massage/отправить.png":
/*!***********************************!*\
  !*** ./img/massage/отправить.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/отправить.png";

/***/ }),

/***/ "./img/swiper/BitmapACER.svg":
/*!***********************************!*\
  !*** ./img/swiper/BitmapACER.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapACER.svg";

/***/ }),

/***/ "./img/swiper/BitmapBOSCH.svg":
/*!************************************!*\
  !*** ./img/swiper/BitmapBOSCH.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapBOSCH.svg";

/***/ }),

/***/ "./img/swiper/BitmapHP.svg":
/*!*********************************!*\
  !*** ./img/swiper/BitmapHP.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapHP.svg";

/***/ }),

/***/ "./img/swiper/BitmapLenovo.svg":
/*!*************************************!*\
  !*** ./img/swiper/BitmapLenovo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapLenovo.svg";

/***/ }),

/***/ "./img/swiper/BitmapSONY.svg":
/*!***********************************!*\
  !*** ./img/swiper/BitmapSONY.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapSONY.svg";

/***/ }),

/***/ "./img/swiper/BitmapView.svg":
/*!***********************************!*\
  !*** ./img/swiper/BitmapView.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapView.svg";

/***/ }),

/***/ "./img/swiper/Bitmapapple.svg":
/*!************************************!*\
  !*** ./img/swiper/Bitmapapple.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmapapple.svg";

/***/ }),

/***/ "./img/swiper/Bitmapsamsung.svg":
/*!**************************************!*\
  !*** ./img/swiper/Bitmapsamsung.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmapsamsung.svg";

/***/ }),

/***/ "./img/swiper/expand.svg":
/*!*******************************!*\
  !*** ./img/swiper/expand.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/expand.svg";

/***/ }),

/***/ "./img/swiper/go.png":
/*!***************************!*\
  !*** ./img/swiper/go.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/go.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map