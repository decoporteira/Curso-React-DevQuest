import { getUser } from '/src/js/services/user.js';
import { getRepositories } from '/src/js/services/repositories.js';
import { user } from '/src/js/objects/user.js'
import { screen } from '/src/js/objects/screen.js';
import { getEvents } from '/src/js/services/events.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
}) 

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;
    
    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return;
        getUserData(userName);
    }    
}) 

async function getUserData(userName){ 
    const userResponse = await getUser(userName)
    
    if (userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    console.log(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)
}

function validateEmptyInput(userName){
    if (userName.length === 0) {
        alert('Digite um nome de usuário.');
        return true
    }
    
}