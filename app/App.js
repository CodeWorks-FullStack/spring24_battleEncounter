import { CharactersController } from './controllers/CharactersController.js';
import { router } from './router-config.js';

// NOTE app is our window into the application
class App {

  router = router

  // NOTE this creates a appwide controller for our user to access
  CharactersController = new CharactersController()

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
