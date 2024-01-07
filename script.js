'use strict'

let eye = document.querySelector('i'),
input = document.querySelector('input'),
box = document.querySelector('.box');

let n = 0;

eye.addEventListener('click', () => {
    n++;

    console.log(n)
    if(n % 2 != 0) {
        input.type = 'text';
        eye.classList.add('bi-eye-slash');
        eye.classList.remove('bi-eye'); 
        input.classList.add('input-bg-2')
        box.classList.add('box-bg-2')
    } else {
        input.type = 'password';
        eye.classList.add('bi-eye');
        eye.classList.remove('bi-eye-slash'); 
        input.classList.remove('input-bg-2')
        box.classList.remove('box-bg-2')
    }
})