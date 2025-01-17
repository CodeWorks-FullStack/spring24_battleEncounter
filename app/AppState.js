import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// NOTE to use something exported in a file, you need to import it
import { Character } from './models/Character.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  // NOTE don't worry about this extra stuff here for now



  characters = [
    new Character("Slate Slabrock", 'dwarf', 5),
    new Character("Flint Ironstag", 'elf', 4),
    new Character("Gretchen Beefsteak", 'Halfling', 3),
    new Character("Thudd", 'ogre', 8),
    new Character("Rolf", 'ogre', 7),
  ]




  // --------------------------------------------------
}


export const AppState = createObservableProxy(new ObservableAppState())


// REVIEW take a look at the appstate when the app loads
// this will console log a proxy obejct look inside the [[Target]]
console.log('🏢', AppState)