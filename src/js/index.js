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
    characters.forEach(character => {
        character.classList.remove('scorpion', 'subzero', 'johnny', 'liukang', 'reptile', 'raiden', 'kunglao', 'jax')
    })
}
function addCharacterBorder(character) {
    const characterId = character.attributes.id.value;
    const selectedCharacter = document.querySelector('.character');
    console.log(characterId);
    if (characterId == 'scorpion') {
        character.classList.add('scorpion')
    }
    if (characterId == 'subzero') {
        character.classList.add('subzero')
    }
    if (characterId == 'johnny-cage') {
        character.classList.add('johnny')
    }
    if (characterId == 'liu-kang') {
        character.classList.add('liukang')
    }
    if (characterId == 'reptile') {
        character.classList.add('reptile')
    }
    if (characterId == 'raiden') {
        character.classList.add('raiden')
    }
    if (characterId == 'kung-lao') {
        character.classList.add('kunglao')
    }
    if (characterId == 'jax') {
        character.classList.add('jax')
    }
   
   

}



