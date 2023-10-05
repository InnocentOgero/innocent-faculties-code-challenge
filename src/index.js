// Your code here
document.addEventListener('DOMContentLoaded',()=>{
const characterBar=document.getElementById('character-bar'); 
fetch(' http://localhost:3000/characters')
 .then(response=>response.json())
 .then(characters=>{
    characters.forEach(character => {
        const characterSpan=document.createElement('span')
        characterSpan.textContent=character.name
        characterSpan.addEventListener('click',()=>{
            displayAnimalDetails(character)
        })
        characterBar.appendChild(characterSpan)
        
    });
 })
const nameElement = document.getElementById('name');
const imageElement = document.getElementById('image');
const voteCountElement = document.getElementById('vote-count');
const votesForm = document.getElementById('votes-form');
const detailedInfoDiv = document.getElementById('detailed-info');
function displayAnimalDetails(character) {
    nameElement.textContent = character.name;
    imageElement.src = character.image;
    voteCountElement.textContent = `Total Votes: ${character.votes}`;

votesForm.addEventListener('submit', event => {
    event.preventDefault();
    const votesInput = document.getElementById('votes');
    const votes = parseInt(votesInput.value);
    if (!isNaN(votes)) {
        character.votes += votes;
        voteCountElement.textContent = `Total Votes: ${character.votes}`;
        votesInput.value = '';
        }
    });
}

})
