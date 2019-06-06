var menu_button = document.getElementById('menu-button');
    menu_button.addEventListener('click', toggleMenu);

var mobile_menu = document.getElementById('mobile-menu');
    mobile_menu-addEventListener('transitionstar', showMenu);
    mobile_menu-addEventListener('transitionend', hidemenu);

    function toggleMenu(){
        mobile_menu.classList.remove('d-none');

        if(mobile_menu.classList.contains('menu-hidden')){
            mobile_menu.classList.add('menu-visible'); 
             mobile_menu.classList.remove('menu-hidden');
        }else {
             mobile_menu.classList.add('menu-hidden'); 
             mobile_menu.classList.remove('menu-visible');
    }

}

function showMenu(){
    if(mobile_menu.classList.contains('menu-visible')){
        mobile_menu.classList.remove('d-none');
    }
}

function hidemenu(){
    if(mobile_menu.classList.contains('menu-hidden')){
        mobile_menu.classList.add('d-none');
    } 
}

    