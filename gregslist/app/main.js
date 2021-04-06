import HousesController from "./Controllers/HousesController.js";

class App {
  housesController = new HousesController();
}

window["app"] = new App();
