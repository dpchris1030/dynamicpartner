// Sécurité : On attend que toute la page HTML soit complètement lue par le navigateur
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. GESTION DU MENU HAMBURGER (MOBILE)
    // =========================================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // On vérifie que les éléments existent bien sur la page pour éviter les bugs
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // =========================================================
    // 2. GESTION DU MODE SOMBRE (DARK MODE)
    // =========================================================
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Vérification de la mémoire (localStorage) au chargement de la page
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '☀️'; // Affiche le soleil si activé
    }

    // Écoute du clic sur le bouton Lune/Soleil
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled'); // Sauvegarde l'activation
                darkModeToggle.textContent = '☀️';           // Change l'icône en soleil
            } else {
                localStorage.setItem('darkMode', 'disabled'); // Sauvegarde la désactivation
                darkModeToggle.textContent = '🌙';            // Remet la lune
            }
        });
    } else {
        // Ce message apparaîtra en mode caché si tu as oublié de mettre l'id dans une page
        console.warn("Attention : Le bouton 'dark-mode-toggle' n'a pas été trouvé sur cette page.");
    }
});