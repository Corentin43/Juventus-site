document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MENU HAMBURGER
       ========================================= */

    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }


    /* =========================================
       MENU DÉROULANT
       ========================================= */

    document.querySelectorAll(".dropdown > a").forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const submenu = this.nextElementSibling;

            if (!submenu) return;

            document.querySelectorAll(".submenu").forEach(menu => {
                if (menu !== submenu) {
                    menu.style.display = "none";
                }
            });

            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
        });
    });


    /* =========================================
       FERMER LES SOUS-MENUS EN CLIQUANT AILLEURS
       ========================================= */

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".dropdown")) {

            document.querySelectorAll(".submenu").forEach(menu => {
                menu.style.display = "none";
            });

        }

    });


    /* =========================================
       TRADUCTION FR / IT
       ========================================= */

    const langToggle = document.getElementById("lang-toggle");

    function changeLanguage(language) {

        document.querySelectorAll("[data-it][data-fr]").forEach(element => {

            const text = element.getAttribute(`data-${language}`);

            if (text !== null) {
                element.innerHTML = text;
            }

        });

        localStorage.setItem("language", language);
    }

    if (langToggle) {

        const savedLanguage = localStorage.getItem("language") || "it";

        langToggle.checked = savedLanguage === "it";

        changeLanguage(savedLanguage);

        langToggle.addEventListener("change", function () {

            const language = this.checked ? "it" : "fr";

            changeLanguage(language);

        });
    }


    /* =========================================
       POPUP DES IMAGES
       ========================================= */

    document.querySelectorAll(".popup-img").forEach(image => {

        image.addEventListener("click", function () {

            const popup = document.createElement("div");

            popup.className = "image-popup";

            popup.innerHTML = `
                <div class="popup-background">
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;

            document.body.appendChild(popup);

            popup.addEventListener("click", function () {
                popup.remove();
            });

        });

    });


    /* =========================================
       ANCIEN SYSTÈME DE POPUP
       Pour les pages utilisant .icone-trophee,
       .player-photo, etc.
       ========================================= */

    const oldPopup = document.getElementById("popup");
    const oldPopupContent = document.getElementById("popup-content");

    if (oldPopup && oldPopupContent) {

        const popupImages = document.querySelectorAll(
            ".icone-trophee:not(.poteaux-carres):not(.video-link), " +
            ".player-photo:not(.poteaux-carres):not(.video-link), " +
            ".player-photo-2, " +
            ".geoffroy, " +
            ".battiston-portrait"
        );

        popupImages.forEach(image => {

            image.style.cursor = "pointer";

            image.addEventListener("click", () => {

                oldPopupContent.src = image.src;

                oldPopup.style.display = "flex";

            });

        });

        oldPopup.addEventListener("click", () => {

            oldPopup.style.display = "none";

        });
    }


    /* =========================================
       VIDÉOS
       ========================================= */

    document.querySelectorAll(".video-link").forEach(image => {

        image.addEventListener("click", () => {

            const url = image.dataset.video;

            if (url) {
                window.open(url, "_blank");
            }

        });

    });


    /* =========================================
       POTEAUX CARRÉS
       ========================================= */

    const poteauxImg = document.querySelector(".poteaux-carres");

    if (poteauxImg) {

        poteauxImg.addEventListener("click", () => {

            poteauxImg.src = "gif/action poteaux carrés.gif";

        });

    }


    /* =========================================
       FERMETURE AVEC ÉCHAP
       ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const popup = document.querySelector(".image-popup");

            if (popup) {
                popup.remove();
            }

            if (oldPopup) {
                oldPopup.style.display = "none";
            }

            document.querySelectorAll(".submenu").forEach(menu => {
                menu.style.display = "none";
            });

        }

    });

});
