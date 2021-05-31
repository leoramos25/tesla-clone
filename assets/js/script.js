const menu = document.querySelector('.checklabel');

menu.addEventListener('click', ()=>{
    const nav = document.querySelector('nav').style;

    if(nav.width == '320px') {
        nav.width = '0px';
    } else {
        nav.width = '320px'
    }
});