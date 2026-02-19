// ==UserScript==
// @name         HideImageVideo
// @version      2026-02-15
// @description  Hide images and videos on websites
// @author       iCooLER
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_KEY = "customCssEnabled2";
    const CSS_ID = "custom-css-style";
    const BTN_CLASS = "custom-css-button";

    // Здесь ваш CSS
    const customCss = `
    img,
        .ytp-hide-controls video,
        video:not(.video-stream) {
            filter: opacity(0%) !important;
            opacity: 1 !important;
        }

        ytd-rich-shelf-renderer[is-shorts],
        .ytd-shorts {
            display: none !important;
        }
        .${BTN_CLASS}.active {
            border-color: green !important;
        }
        *[style*=background-image] {
        background-image: none !important;
        }
  `;

    // Создаем кнопку
    const btn = document.createElement("button");
    btn.textContent = "CSS: ON";
    btn.classList.add(BTN_CLASS);
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px 15px";
    btn.style.borderRadius = "8px";
    btn.style.border = "3px solid #444";
    btn.style.background = "#000";
    btn.style.color = '#fff';
    btn.style.cursor = "pointer";
    btn.style["text-align"] = "center";

    if (allowHost()) {
        document.body.appendChild(btn);
    }

    function allowHost() {
        return !["youtube.com", "x.com"].includes(
            location.host.replace("www.", "")
        );
    }

    // Функция для включения CSS
    function enableCss() {
        if (!document.getElementById(CSS_ID)) {
            const style = document.createElement("style");
            style.id = CSS_ID;
            style.textContent = customCss;
            document.head.appendChild(style);
        }
        btn.textContent = "ON";
        btn.classList.add("active");
        localStorage.setItem(STORAGE_KEY, "true");
    }

    // Функция для отключения CSS
    function disableCss() {
        const style = document.getElementById(CSS_ID);
        if (style) style.remove();
        btn.textContent = "OFF";
        btn.classList.remove("active");
        localStorage.setItem(STORAGE_KEY, "false");
    }

    // Читаем состояние из localStorage
    const enabled = localStorage.getItem(STORAGE_KEY);
    if (enabled === null || enabled === "true") {
        enableCss(); // по умолчанию включено
    } else {
        disableCss();
    }

    // Обработчик клика
    btn.addEventListener("click", () => {
        const current = localStorage.getItem(STORAGE_KEY);
        if (current === "true" || current === null) {
            disableCss();
        } else {
            enableCss();
        }
    });
})();
