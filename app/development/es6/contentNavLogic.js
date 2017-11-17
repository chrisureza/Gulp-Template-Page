var contentNavLogic = (function(){
    var logic = {
        activeTab : ()=>{
            let contentTab = document.querySelectorAll('.content-nav_nav-item');

            contentTab.forEach((element)=>{
                element.addEventListener('click',()=>{
                    contentTab.forEach((element)=>{
                        element.classList.remove("content-nav_nav-item--active");
                    })

                    //var sideMenu = document.querySelector('.side-menu_container');
                    //sideMenu.classList.toggle("side-menu_container-show");
                    element.classList.add("content-nav_nav-item--active");
                });  
            }) 
        },
        init : ()=>{
            logic.activeTab();
        }
    }
    return logic.init();
})();