```javascript
document.addEventListener("DOMContentLoaded", () => {

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
       IMAGES / POPUPS
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
       FERMETURE AVEC ÉCHAP
       ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const popup = document.querySelector(".image-popup");

            if (popup) {
                popup.remove();
            }

            document.querySelectorAll(".submenu").forEach(menu => {
                menu.style.display = "none";
            });

        }

    });


    /* =========================================
       LOGO
       ========================================= */

    const logoTrigger = document.getElementById("logo-trigger");

    if (logoTrigger) {

        logoTrigger.addEventListener("click", function (event) {

            /*
             * Le logo reste un lien normal vers index.html.
             *
             * Aucun lancement de musique.
             * Aucun confetti.
             */

        });

    }

});
```
