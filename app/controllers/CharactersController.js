import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharactersService.js";

function exampleFunction() {
  console.log('howdy 🐸');
}


// NOTE the export on the class here lets us export our controller as a bundle of code to be accessed
export class CharactersController {
  // charactersService = new charactersService() We don't do this because we want the service to be obscured
  constructor() {
    // NOTE our controller gets ran, when this controller 'Mounts' or on page load
    console.log('character 🎮 loaded');
    this.drawCharacterButtons()
  }

  drawCharacterButtons() {
    let buttonHTML = ''
    AppState.characters.forEach(character => buttonHTML += `
    <button class="btn btn-primary" onclick="app.CharactersController.shankCharacter('${character.name}')">🗡️
        ${character.name} 🍷[${character.healthPercent}]
    </button>
    `)
    let buttonsElm = document.getElementById('character-buttons')
    buttonsElm.innerHTML = buttonHTML
  }

  // TAKES IN ACTION
  shankCharacter(characterName) {
    console.log('shanking ', characterName);
    charactersService.shankCharacter(characterName)
    this.drawCharacterButtons()
    // exampleFunction()
  }
}