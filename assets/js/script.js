let menu = document.querySelector('.checklabel');
let nav = document.querySelector('nav');

menu.addEventListener('click', function menuToggle(){
    if(nav.style.width == '320px') {
        nav.style.width = '0px';
    } else {
        nav.style.width = '320px'
    }
});
