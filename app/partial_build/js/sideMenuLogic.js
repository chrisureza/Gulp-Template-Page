'use strict';

var sideMenuLogic = function () {
    var logic = {
        toggleMenu: function toggleMenu() {
            var menuIcon = document.querySelector('.header_menu-icon');
            menuIcon.addEventListener('click', function () {
                var sideMenu = document.querySelector('.side-menu_container');
                sideMenu.classList.toggle("side-menu_container-show");
                menuIcon.classList.toggle("header_menu-icon-active");
            });
        },
        init: function init() {
            logic.toggleMenu();
        }
    };
    return logic.init();
}();