// navigation des pages
function navigateToPage(page) {
    window.location.href = page;
}

// Déplace le script en bas du fichier juste avant la balise de fermeture du body
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const menuNumber = parseInt(link.getAttribute('data-menu'));
            showNextMenu(menuNumber);
        });
    });
});

function showNextMenu(menuNumber) {
    // Masque tous les menus
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.classList.remove('visible');
    });

    // Affiche le menu spécifié
    const currentMenu = document.getElementById(`mission${menuNumber}`);
    if (currentMenu) {
        currentMenu.classList.add('visible');
    }
}
