// ==UserScript==
// @name         Twitch Chest Clicker
// @namespace    https://github.com/MateusPevidor
// @version      0.1
// @description  Automatically clicks on twitch channel points's chest
// @author       Floaddy
// @match        https://www.twitch.tv/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function() {
  setInterval(() => {
      clickBonus();
  }, 500);
})();

function clickBonus() {
  let elem = $('.claimable-bonus__icon')[0];

  if (elem) {
      elem.click();
  }
}