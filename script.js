// ==UserScript==
// @name         HideImageVideo
// @version      2026-02-20
// @description  Hide images and videos on websites
// @author       iCooLER
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const customCss = `
        img,
        video:not(.video-stream) {
            filter: opacity(0%) !important;
            opacity: 1 !important;
        }

        ytd-rich-shelf-renderer[is-shorts],
        .ytd-shorts {
            display: none !important;
        }
        *[style*=background-image] {
            background-image: none !important;
        }
  `;

    function enableCss() {
        const style = document.createElement("style");
        style.textContent = customCss;
        document.head.appendChild(style);
    }

    enableCss();
})();
