import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
  // What are we drawing
  let houses = ProxyState.houses
  let template = ''
  // if a collection itterate over collection to generate template for each object
  houses.forEach(house => {
    console.log(house)
    template += house.Template
  })
  // render to page
  document.getElementById('houses').innerHTML = template
}

//Public





  export default class HousesController {
    constructor() {
      ProxyState.on('houses', _draw);
  
      // REVIEW
      // GET CARS ON LOAD
      this.getHouses()
    }
  
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse() {
    try{
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    let newHouse = {
      // @ts-ignore
      rooms: form.rooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      levels: form.levels.value,
      //@ts-ignore
      squarefeet: form.squarefeet.value,
      // @ts-ignore  this converts the string to a number
      price: Number(form.price.value),
      // @ts-ignore
      year: form.year.value,
      //@ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    await housesService.createHouse(newHouse)
    form.reset()
  } catch (error) {
   
  }
  $('#new-house-form').modal('hide')
  }
   

    // @ts-ignore

    // get the modal and close (using jQuery's "$" selector) 

  



  deleteHouse(id) {
     try {
      housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    housesService.bid(id)
  }

}
