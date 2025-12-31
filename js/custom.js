document.querySelectorAll('.nav-ul .nav-li').forEach((li, index) => {
  li.style.setProperty('--i', index);
});
const menuDrawer = document.querySelector('#menu-drawer');

document.querySelector('header-drawer .menu-btn').addEventListener('click', function () {
    menuDrawer.classList.add('open');
});

document.querySelector('#menu-drawer .nav-close-btn').addEventListener('click', function () {
    menuDrawer.classList.remove('open');
});