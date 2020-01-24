import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {

  currPetID: any;
  currPet: any;
  editing: any;

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private _router: Router) {
      this.route.params.subscribe( params => {
        this.currPetID = params['id']});
  }

  ngOnInit() {
    this.getPet()
    this.editing = this.currPet
    console.log(this.editing);
  }
  updateCurrPet() {
    let observable = this._httpService.editPet(this.currPet)
    observable.subscribe((data:any) => {
      console.log(data)
    })
    this._router.navigate(['/pets',this.currPetID])
  }
  getPet() {
    let observable = this._httpService.getOnePet(this.currPetID);
    observable.subscribe((data:any) => {
      console.log(data)
      this.currPet = data.results
    })
  }
}
