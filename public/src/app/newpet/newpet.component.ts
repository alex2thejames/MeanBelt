import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {
  allPets: any;
  newPet: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newPet = { name: "" };
    this.newPet = { type: "" };
    this.newPet = { description: "" };
    this.newPet = { skill1: "" };
    this.newPet = { skill2: "" };
    this.newPet = { skill3: "" };
    this.getPetsFromService()
  }
  createPet() {
    let observable = this._httpService.createPet(this.newPet);
    observable.subscribe((data: any) => {
      console.log(data)
    })
    this._router.navigate(['/'])
  }
  getPetsFromService() {
    let observable = this._httpService.getPets();
    observable.subscribe((data:any) => {
      this.allPets = data.results
    })
  }
}
