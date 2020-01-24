import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('/ppets')
  }
  getOnePet(pet_id) {
    return this._http.get(`/ppets/${pet_id}`)
  }

  createPet(pet_from_component) {
    return this._http.post('/ppets', pet_from_component)
  }

  editPet(pet_from_component) {
    return this._http.put(`ppets/${pet_from_component._id}`, pet_from_component)
  }

  deletePet(pet_id) {
    return this._http.delete(`/ppets/${pet_id}`)
  }
}

