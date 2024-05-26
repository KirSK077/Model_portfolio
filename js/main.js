const menu = document.querySelector('.nav-bar-list');
const menuBtn = document.querySelector('.menu__burger');
const menuLink = document.querySelector('.nav-link');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        menuLink.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}