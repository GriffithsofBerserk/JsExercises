'use strict';

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    addItem(USER_NAME.value, SCORE.value)
}

let userListDOM = document.querySelector('#userList')
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
        `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}