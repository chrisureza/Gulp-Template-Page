var sideMenuLogic = (function(){
    var logic = {
        toggleMenu : ()=>{
            var menuIcon = document.querySelector('.header_menu-icon');
            menuIcon.addEventListener('click',()=>{
                var sideMenu = document.querySelector('.side-menu_container');
                sideMenu.classList.toggle("side-menu_container-show");
                menuIcon.classList.toggle("header_menu-icon-active");
            });   
        },
        init : ()=>{
            logic.toggleMenu();
        }
    }
    return logic.init();
})();