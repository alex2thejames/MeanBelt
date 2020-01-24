import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-displaypet',
  templateUrl: './displaypet.component.html',
  styleUrls: ['./displaypet.component.css']
})
export class DisplaypetComponent implements OnInit {

  currPet: any;
  currPetID: any;
  currPetLikes: Number;
  clicked = false;
  
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private _router: Router) {
      this.route.params.subscribe( params => {
        this.currPetID = params['id']});
      }

  ngOnInit() {
    this.getPet()
  }
  adoptPet(id) {
    let observable = this._httpService.deletePet(id);
    observable.subscribe((data:any) => { 
    })
    this._router.navigate(['/pets'])
  }
  likePet(id) {
    this.currPet.likes += 1
    let observable = this._httpService.editPet(this.currPet)
    observable.subscribe((data:any) => {
      console.log(data)
    })
  }
  getPet() {
    let observable = this._httpService.getOnePet(this.currPetID);
    observable.subscribe((data:any) => {
      this.currPet = data.results
    })
  }
}

