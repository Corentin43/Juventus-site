document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("lang-toggle");

    // Récupère la langue sauvegardée
    let langue = localStorage.getItem("langue") || "fr";

    function changerLangue(langue) {

        document.querySelectorAll("[data-it][data-fr]").forEach(element => {
            if (langue === "it") {
                element.textContent = element.dataset.it;
            } else {
                element.textContent = element.dataset.fr;
            }
        });

        // position du bouton
        toggle.checked = (langue === "it");
		toggle.classList.add("no-animation");

		setTimeout(() => {
			toggle.classList.remove("no-animation");
		}, 100);
    }

    // applique dès l'ouverture de la page
    changerLangue(langue);


    toggle.addEventListener("change", () => {

        if (toggle.checked) {
            langue = "it";
        } else {
            langue = "fr";
        }

        // sauvegarde
        localStorage.setItem("langue", langue);

        changerLangue(langue);
    });

});