var sideMenuLogic = (function(){
    var logic = {
        toggleMenu : ()=>{
            document.querySelector('.header_menu-icon').addEventListener('click',()=>{
                document.querySelector('.side-menu_container').classList.toggle("side-menu_container-show");
            });
        },
        init : ()=>{
            logic.toggleMenu();
        }
    }
    return logic.init();
})();