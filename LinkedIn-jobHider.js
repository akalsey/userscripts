// ==UserScript==
// @name        LinkedIn Job Hider
// @version     1.0
// @updateURL   https://
// @downloadURL https://.js
// @icon        https://dl.dropboxusercontent.com/u/57161259/icons/cs-ohnoes-icon.png
// @author      Adam Kalsey
// @description Really hide job ads when you hit "Don't Show"
// @include     http*://www.linkedin.com/
// @grant       GM_addStyle
// ==/UserScript

GM_addStyle('.job-card-list--is-dismissed { display: none !important; }'); 
