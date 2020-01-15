let btn = document.getElementById('btn');

let diva = document.getElementById('a');
let divb = document.getElementById('b');
let divc = document.getElementById('c');
let divd = document.getElementById('d');

let divTop = document.getElementById('top');
let divBottom = document.getElementById('bottom');

btn.addEventListener('click', () => {
    diva.style.animation = 'anim3Da 3s infinite';
    divb.style.animation = 'anim3Db 3s infinite';
    divc.style.animation = 'anim3Dc 3s infinite';
    divd.style.animation = 'anim3Dd 3s infinite';
    
    divTop.style.animation = 'anim3DTop 3s infinite';
    divBottom.style.animation = 'anim3DBottom 3s infinite';
});