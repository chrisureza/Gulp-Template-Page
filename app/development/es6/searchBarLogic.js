var searchBarLogic = (function(){
    var logic = {
        inputOnFucus : ()=>{
            var input = document.querySelector('.search-bar_input');
            var searchBar = document.querySelector('.header_search-section');
            input.addEventListener('focus',()=>{
                searchBar.classList.add("header_search-section--active");
            });   
            input.addEventListener('blur',()=>{
                searchBar.classList.remove("header_search-section--active");
            }); 
        },
        init : ()=>{
            logic.inputOnFucus();
        }
    }
    return logic.init();
})();