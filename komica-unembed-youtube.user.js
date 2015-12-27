// ==UserScript==
// @name        Komica - Unembed Youtube
// @version     0.1.0
// @namespace   eight04.blogspot.com
// @description Open youtube in new tab instead of playing directly when clicking on the video.
// @include     http://*mykomica.org/*
// @grant       none
// @compatible  firefox
// @compatible  chrome
// @compatible  opera
// ==/UserScript==

var i, m, ytplayers;

ytplayers = document.querySelectorAll(".ytplayer");

for (i = 0; i < ytplayers.length; i++) {
	if ((m = ytplayers[i].parentNode.href.match(/ytclick\('([^']+)'.+?\)/))) {
		ytplayers[i].parentNode.href = "https://www.youtube.com/watch?v=" + m[1];
		ytplayers[i].parentNode.target = "_blank";
	}
}
