var menu_button = document.getElementById('menu-button');
    if(menu_button){
    menu_button.addEventListener('click', toggleMenu);
    }

var hire_me_button = document.getElementById('hire-me-button');
if(hire_me_button){
    hire_me_button.addEventListener('click', function(){
        alert('Contratame');
    });
}

var mobile_menu = document.getElementById('mobile-menu');
    if(mobile_menu){
    mobile_menu.addEventListener('transitionstar', showMenu);
    mobile_menu.addEventListener('transitionend', hidemenu);
    }

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

    //Implementacion de mi calculadora *calc*
    if (typeof Calculator !== 'undefined') {
        var calc = new Calculator();
        var calc_input = document.getElementById('calc_input');
        var calc_sum = document.getElementById('calc_sum');
        var calc_subs = document.getElementById('calc_subs');
        var calc_div = document.getElementById('calc_div');
        var calc_mult = document.getElementById('calc_mult');
        var calc_eq = document.getElementById('calc_eq');
      
        calc.setInput(calc_input);
        if (calc_input) {
          calc_input.addEventListener('focus', function () {
            this.select();
          });
        }
        if (calc_sum) {
          calc_sum.addEventListener('click', calc.setOperation.bind(calc, 'sum'));
        }
        if (calc_subs) {
          calc_subs.addEventListener('click', calc.setOperation.bind(calc, 'subs'));
        }
        if (calc_div) {
          calc_div.addEventListener('click', calc.setOperation.bind(calc, 'div'));
        }
        if (calc_mult) {
          calc_mult.addEventListener('click', calc.setOperation.bind(calc, 'mult'));
        }
        if (calc_eq) {
          calc_eq.addEventListener('click', calc.setOperation.bind(calc, 'equal'));
        }
      }
   