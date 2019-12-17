// ==UserScript==
// @name         I'm a proper student!
// @updateURL    https://github.com/itxtools/dark-etis-theme/raw/master/dark-etis.user.js
// @downloadURL  https://github.com/itxtools/dark-etis-theme/raw/master/dark-etis.user.js
// @supportURL   https://github.com/itxtools/dark-etis-theme/issues
// @version      0.1
// @author       itxtools
// @match        https://student.psu.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('nav nav-tabs nav-stacked')[0].children[3].innerHTML = "\n<a href=\"stu.absence\">Пропущенные занятия</a>"
})();
