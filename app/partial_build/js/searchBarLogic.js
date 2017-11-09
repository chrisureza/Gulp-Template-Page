'use strict';

var searchBarLogic = function () {
    var logic = {
        inputOnFucus: function inputOnFucus() {
            var input = document.querySelector('.search-bar_input');
            var searchBar = document.querySelector('.header_search-section');
            input.addEventListener('focus', function () {
                searchBar.classList.add("header_search-section--active");
            });
            input.addEventListener('blur', function () {
                searchBar.classList.remove("header_search-section--active");
            });
        },
        init: function init() {
            logic.inputOnFucus();
        }
    };
    return logic.init();
}();