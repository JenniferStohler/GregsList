import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"
import { api } from "./AxiosService.js";



class HousesService {
  async getHouses(){
  let res =  await api.get('houses')
  console.log(res.data)
  ProxyState.houses = res.data.map(h => new House(h))
  }
  async createHouse(newHouse) {

    let res = await api.post('houses', newHouse)
    console.log(res,data)
    res.data.id = res.data.id
    let house = new House(res.data)
    ProxyState.houses = [...ProxyState.houses, house]

  }
  async bid(id) {
    // find the House
    let house = ProxyState.houses.find(house => house.id === id)
    // make the change
    house.price += 1000

    await api.put('houses/' + id, house)

    // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    ProxyState.houses = ProxyState.houses
  }
  async deleteHouse(id) {
    //restful convention for aa delete route is '/collectionName/: id'(the ':' indicates a variable value does not need to be added)
    await api.delete('houses/' + id)
    // remove the car with that id from the array
    // trigger the update cycle by setting the value of ProxyState.cars

    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the car with the id by only keeping cars that do not have that id
    // then we set the ProxyState array back to the result after the filter
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }

}

export const housesService = new HousesService();

