// ==UserScript==
// @name         osu_redirect
// @namespace    https://github.com/Floaddy
// @version      0.1
// @description  osu!'s old website is better e.e
// @author       Floaddy
// @include      https://osu.ppy.sh/users/*
// @include      https://osu.ppy.sh/beatmapsets/*
// ==/UserScript==

(function() {

  let input = "";

  document.addEventListener('keypress', e => {
      input += e.key;
      if (input.substr(input.length-3, 3) === "qwe") {
          redirect();
      }
  });
})();

function redirect() {
  const currURL = window.location.href;
  if (currURL.includes("users")) {
      const user = currURL.split('/')[4];
      window.location.href = `https://osu.ppy.sh/u/${user}`;
  } else if (currURL.includes("beatmapsets")) {
      const beatmap = currURL.split('/')[5];
      window.location.href = `https://osu.ppy.sh/b/${beatmap}`;
  }
}