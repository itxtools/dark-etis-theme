// ==UserScript==
// @name         Etis ZoomeFixer
// @namespace    https://github.com/itxtools/dark-etis-theme
// @updateURL    https://github.com/itxtools/dark-etis-theme/raw/master/zoomFixer.user.js
// @downloadURL  https://github.com/itxtools/dark-etis-theme/raw/master/zoomFixer.user.js
// @supportURL   https://github.com/itxtools/dark-etis-theme/issues
// @version      1.0.0
// @description  Can you even code
// @author       je09
// @licence      MIT
// @match        https://student.psu.ru/pls/stu_cus_et*
// ==/UserScript==

(function() {
    'use strict';

    function zoomFixer(item, index) {
        var linkItem = item.getElementsByTagName("a")[0];
        if (linkItem && linkItem.href.toString().includes("%20")) {
            linkItem.href = linkItem.href.toString().split("%20")[0];
        }
    }

    Array.prototype.slice.call(document.getElementsByClassName("aud")).forEach(zoomFixer);
})();
