const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const formInputInfoElm = document.querySelector(".input-info");
const popUpShowGiftElm = document.querySelector(".pop-up-show-gift-box");
const lstGiftElm = document.querySelector(".list-gift-elm");
const btnSendInfoElm = document.querySelector("#btn-send-info");
const listGiftBoxElm = document.querySelectorAll(".gift-box");
const resultGiftElm = document.querySelector(".result-gift");
const btnCloseElm = document.querySelector("#btn-close");
// const btnReopenGiftElm = document.querySelector("#btn-re-open");
const btnReceiveElm = document.querySelector("#btn-recevie");
const btnRulesElm = document.querySelector("#btn-rules");
const popUpRulesElm = document.querySelector(".pop-up-rules");
const btnCloseRolesElm = document.querySelector("#btn-close-rules");
const btnCloseResultGiftElm = document.querySelector("#btn-close-gift");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");
//     target.classList.add("active");
//   });
// });

// listGiftBoxElm.forEach((gift) => {
//   gift.addEventListener("click", () => {
//     popUpShowGiftElm.classList.remove("hidden");
//     setTimeout(() => {
//       $(".gift-result").show();
//     }, 2000);
//   });
// });

// btnReceiveElm.addEventListener("click", () => {
//   formInputInfoElm.classList.remove("hidden");
//   lstGiftElm.classList.add("hidden");
//   popUpShowGiftElm.classList.add("hidden");
// });

// btnCloseElm.addEventListener("click", () => {
//   formInputInfoElm.classList.add("hidden");
//   resultGiftElm.classList.add("hidden");
//   lstGiftElm.classList.remove("hidden");
// });

// // btnReopenGiftElm.addEventListener("click", () => {
// //   popUpShowGiftElm.classList.add("hidden");
// // });

// btnRulesElm.addEventListener("click", () => {
//   popUpRulesElm.classList.toggle("hidden");
// });

// btnCloseRolesElm.addEventListener("click", () => {
//   popUpRulesElm.classList.add("hidden");
// });

// btnCloseResultGiftElm.addEventListener("click", () => {
//   popUpShowGiftElm.classList.add("hidden");
//   $(".gift-result").hide();
// });

$(function () {
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
      popUpShowGiftElm.classList.remove("hidden");
      setTimeout(() => {
        $(".gift-result").show();
        $(".pop-up__contents--gift").hide();
      }, 750);
    });
  });

  btnReceiveElm.addEventListener("click", () => {
    formInputInfoElm.classList.remove("hidden");
    lstGiftElm.classList.add("hidden");
    popUpShowGiftElm.classList.add("hidden");
  });

  btnCloseElm.addEventListener("click", () => {
    formInputInfoElm.classList.add("hidden");
    resultGiftElm.classList.add("hidden");
    lstGiftElm.classList.remove("hidden");
  });

  // btnReopenGiftElm.addEventListener("click", () => {
  //   popUpShowGiftElm.classList.add("hidden");
  // });

  btnRulesElm.addEventListener("click", () => {
    popUpRulesElm.classList.toggle("hidden");
  });

  btnCloseRolesElm.addEventListener("click", () => {
    popUpRulesElm.classList.add("hidden");
  });

  btnCloseResultGiftElm.addEventListener("click", () => {
    popUpShowGiftElm.classList.add("hidden");
    $(".gift-result").hide();
    $(".pop-up__contents--gift").show();
  });

  $("#btn-qr-code").click(() => {
    $(".pop-up-download").show();
  });

  $("#btn-close-download").click(() => {
    $(".pop-up-download").hide();
  });
});
