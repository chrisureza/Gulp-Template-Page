'use strict';

var contentNavLogic = function () {
    var logic = {
        activeTab: function activeTab() {
            var contentTab = document.querySelectorAll('.content-nav_nav-item');

            contentTab.forEach(function (element) {
                element.addEventListener('click', function () {
                    contentTab.forEach(function (element) {
                        element.classList.remove("content-nav_nav-item--active");
                    });

                    //var sideMenu = document.querySelector('.side-menu_container');
                    //sideMenu.classList.toggle("side-menu_container-show");
                    element.classList.add("content-nav_nav-item--active");
                });
            });
        },
        init: function init() {
            logic.activeTab();
        }
    };
    return logic.init();
}();