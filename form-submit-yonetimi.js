'use strict';

let formDOM = document.querySelector('#userForm')

formDOM.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.preventDefault();
    console.log("İşlem Gerçekleşti.");
    let scoreInputDom = document.querySelector('#score')
    console.log(scoreInputDom.value)
    localStorage.setItem('score', scoreInputDom.value)
}