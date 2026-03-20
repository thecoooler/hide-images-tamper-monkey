// ==UserScript==
// @name         HideImageVideo
// @version      v1.0
// @description  Hide images and videos on websites
// @author       iCooLER
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const customCss = `
        img,
        video:not(.video-stream),
        *[style*="background-image"] {
            filter: blur(16px) brightness(0.7) !important;
            transform: scale(1.02) !important;
            transform-origin: center center !important;
            overflow: hidden !important;
            background: #1a1a1a !important;
        }

        img,
        *[style*="background-image"] {
            clip-path: inset(0) !important;
        }

        ytd-rich-shelf-renderer[is-shorts],
        .ytd-shorts {
            display: none !important;
        }
  `;

    function enableCss() {
        const style = document.createElement("style");
        style.textContent = customCss;
        document.head.appendChild(style);
    }

    enableCss();
})();
