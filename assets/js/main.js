const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const formInputInfoElm = document.querySelector(".input-info");
const popUpShowElm = document.querySelector(".pop-up-show-gift-box");
const lstGiftElm = document.querySelector(".list-gift-elm");
const btnSendInfoElm = document.querySelector("#btn-send-info");
const listGiftBoxElm = document.querySelectorAll(".gift-box");
const resultGiftElm = document.querySelector(".result-gift");
const btnCloseElm = document.querySelector("#btn-close");
const btnReopenGiftElm = document.querySelector("#btn-re-open");
const btnReceiveElm = document.querySelector("#btn-recevie");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

listGiftBoxElm.forEach((gift) => {
  gift.addEventListener("click", () => {
    popUpShowElm.classList.remove("hidden");
  });
});

btnReceiveElm.addEventListener("click", () => {
  formInputInfoElm.classList.remove("hidden");
  lstGiftElm.classList.add("hidden");
  popUpShowElm.classList.add("hidden");
});

// btnSendInfoElm.addEventListener("click", () => {
//   formInputInfoElm.classList.add("hidden");
//   resultGiftElm.classList.remove("hidden");
// });

btnCloseElm.addEventListener("click", () => {
  formInputInfoElm.classList.add("hidden");
  resultGiftElm.classList.add("hidden");
  lstGiftElm.classList.remove("hidden");
});

btnReopenGiftElm.addEventListener("click", () => {
  popUpShowElm.classList.add("hidden");
});
 