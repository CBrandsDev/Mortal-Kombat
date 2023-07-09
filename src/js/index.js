const characters = document.querySelectorAll('.character');

characters.forEach(character => {
    character.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, beheavior:'smooth'});
        }

        removeCharacterSelection();
        character.classList.add('selected');
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
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}
