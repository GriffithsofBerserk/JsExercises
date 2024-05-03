let users = ["lorem","ipsum","dolor"]

let usersDOM = document.querySelector('#userList')

let index = 0;
for (0; index < users.length; index++) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    usersDOM.appendChild(liDOM)
}