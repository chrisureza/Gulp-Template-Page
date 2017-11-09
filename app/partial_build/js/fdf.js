'use strict';

var sideMenuLogic = function () {
    var logic = {
        toggleMenu: function toggleMenu() {
            document.querySelector('.header_menu-icon').addEventListener('click', function () {
                document.querySelector('.side-menu_container').classList.toggle("side-menu_container-show");
            });
        },
        init: function init() {
            logic.toggleMenu();
        }
    };
    return logic.init();
}();