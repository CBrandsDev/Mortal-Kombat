const characters = document.querySelectorAll('.character');

characters.forEach(character => {
    character.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, beheavior:'smooth'});
        }

        removeCharacterSelection();
        addCharacterBorder(character);
       
        replaceBigCharacter(character);
        replaceCharacterName(character);
        replaceCharacterDescription(character);
        

    })
})

function replaceCharacterDescription(character) {
    const characterDescription = document.getElementById('character-description');
    characterDescription.innerText = character.getAttribute('data-description');
}

function replaceCharacterName(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function replaceBigCharacter(character) {
    const characterImage = document.querySelector('.character-big');
    const characterId = character.attributes.id.value;
    characterImage.src = `./src/images/${characterId}.gif`;
}

function removeCharacterSelection() {
    const selectedCharacter = document.querySelector('.scorpion');
    const characterId = selectedCharacter.attributes.id.value;
    selectedCharacter.classList.remove('scorpion');
    selectedCharacter.classList.remove('subzero');
    selectedCharacter.classList.remove('johhnycage');
    selectedCharacter.classList.remove('scorpion');
    selectedCharacter.classList.remove('scorpion');
    selectedCharacter.classList.remove('scorpion');
    selectedCharacter.classList.remove('scorpion');
    selectedCharacter.classList.remove('scorpion');
}
function addCharacterBorder(character) {
    character.classList.add('scorpion')
    
   
    
    
    // if (characterId == 'scorpion') {
    //     character.classList.add('scorpion')
    // }
    // if (characterId == 'subzero') {
    //     character.classList.add('subzero')
    // }
     
}



