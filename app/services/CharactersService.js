import { AppState } from "../AppState.js";





class CharactersService {

  // PERFORMS THE ACTION (changes data)
  shankCharacter(characterName) {
    console.log('🗡️🗡️🗡️', characterName);
    const characterToStab = AppState.characters.find(character => character.name == characterName)
    console.log('Are you stabbing', characterToStab);
    characterToStab.health -= 3
    console.log(characterToStab);
  }
}

export const charactersService = new CharactersService()