// ==UserScript==
// @name         Roll20-night
// @version      0.1
// @namespace    https://github.com/lati111/roll20-night
// @description  Makes the roll20 darkmode less crappy
// @author       Lati111

// @match        https://app.roll20.net/editor/character/*

// @resource   IMPORTED_CSS https://raw.githubusercontent.com/lati111/roll20-night/main/roll20-night.css
// @grant      GM_getResourceText
// @grant      GM_addStyle

// ==/UserScript==

(function() {
    'use strict';

    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
})();
