export default class House {
    constructor({bedrooms, bathrooms, levels, year, squarefeet, description, price, imgUrl, id}) {
        this.id = id
        this.bedrooms = bedrooms
        this. bathrooms = bathrooms
        this.levels = levels
        this.year = year
        this.squarefeet = squarefeet
        this. description = description
        this.price = price
        this.imgUrl = imgUrl
    
    }

    get Template() {

        return /*html*/`
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card shadow">
                    <img class="card-img-top" src="${this.imgUrl}" alt="">
                    <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">${this.bedrooms} | ${this.bathrooms} | ${this.levels} | ${this.squarefeet} | ${this.year}</h4>
                        <p class="card-text">${this.description} - ${this.price.toFixed(2)}</p>
                    </div>
                    <div class="px-3 pb-3 d-flex justify-content-between">
                        <button type="button" class="btn btn-danger" onclick = "app.housesController.deleteHouse('${this.id}')>Delete</button>
                        <button type="button" class="btn btn-info" onclick = "app.housesController.bid('${this.id}')>Bid</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
