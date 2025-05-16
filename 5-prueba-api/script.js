async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const userList = document.getElementById('userList');

    console.log(users);

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} - ${user.email}`
        userList.appendChild(userItem);
    });

}