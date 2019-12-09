class SwapiService{

    _apiBase = "https://swapi.co/api";

    async getResource(url){
        const res = await fetch(url);

        if(!res.ok){
            throw Error(`Could not fetch ${url}`+ ` , received ${res.status}`);
        }
        return await res.json();
    }

    async getAllStarships(){
        const res = await this.getResource(this._apiBase + "/starships/");
        return res.results.map(this._transformStarship);
    }

    async getStarship(id){
        const starship = await this.getResource(this._apiBase + `/starships/${id}`);
        return this._transformStarship(starship);
    }

    async getAllVehicles(){
        const res = await this.getResource(this._apiBase + "/vehicles/");
        return res.results.map(this._transformVehicle);
    }

    async getVehicle(id){
        const vehicle = await this.getResource(this._apiBase + `/vehicles/${id}`);
        return this._transformVehicle(vehicle);
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformStarship = (starship) =>{
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
            hyperdriveRating: starship.hyperdrive_rating
        }
    };

    _transformVehicle = (vehicle) =>{
        return{
            id: this._extractId(vehicle),
            name: vehicle.name,
            model: vehicle.model,
            manufacturer: vehicle.manufacturer,
            costInCredits: vehicle.cost_in_credits,
            length: vehicle.length,
            maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
            passengers: vehicle.passengers
        }
    };
}
// const swapi = new SwapiService();
//
// swapi.getAllStarships().then((item)=>{
//     console.log(item);
// });
//
// //
// // swapi.getAllVehicles().then((item)=>{
// //    console.log(item);
// // });