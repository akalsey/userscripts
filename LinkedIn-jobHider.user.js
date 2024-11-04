// ==UserScript==
// @name        LinkedIn Job Hider
// @version     1.0
// @author      Adam Kalsey
// @description Really hide job ads when you hit Don't Show
// @match       https://www.linkedin.com/*
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('.job-card-list--is-dismissed { display: none !important; }'); 
