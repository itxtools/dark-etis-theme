// ==UserScript==
// @name         dark-etis
// @namespace    https://github.com/itxtools/dark-etis-theme
// @updateURL    https://github.com/itxtools/dark-etis-theme/raw/master/dark-etis.user.js
// @downloadURL  https://github.com/itxtools/dark-etis-theme/raw/master/dark-etis.user.js
// @supportURL   https://github.com/itxtools/dark-etis-theme/issues
// @version      1.0
// @description  My eyes hurts, when the brightness comes
// @author       itxtools
// @licence      MIT
// @match        https://student.psu.ru/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
        html {
      background-color: #212121 !important; // 292828 - тоже гуд
    }
    body, iframe {
      background-color:transparent!important;
      background:transparent!important;
      background-image:none!important;
    }
    body, iframe {
      filter: invert(0.91) hue-rotate(180deg) !important;
    }
    :not(object):not(body)>embed, img, video, figure:empty, *[data-img], *[data-thumb-url], *[style*='background:url']:not(input), *[style*='background: url']:not(input), *[style*='background-image:url']:not(input), *[style*='background-image: url']:not(input) {
      filter: invert(1) hue-rotate(180deg) !important;
    }
    [style*='background:url'] *, [style*='background-image:url'] *, [style*='background: url'] *, [style*='background-image: url'] *, input, [background] * {
      filter: none !important;
    }
    :-webkit-full-screen, :-webkit-full-screen * {
      filter: none !important;
    }
	
ul, li {
background-color: #e6dfdf;
}
.day {
  padding: 5px;
  border-radius: 4px;
  background-color: #e6dfdf;
}

a {
color: #000000ad;
text-decoration: none !important; // меня бесит подчеркивание ссылок в расписании
}

.timetable td {
border-top: 1px solid #2324251f !important;
    border-bottom: 1px solid #2324251f !important;
}

.timetable .pair_num {
    border-left: 0px solid !important;
}

.teacher_photo {
background-color: #2324251f;
}
.teacher_photo img {
    border: 6px solid #252525;
}
`)
