import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {

  allPets: any

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getPetsFromService()
  }
  getPetsFromService() {
    let observable = this._httpService.getPets();
    observable.subscribe((data:any) => {
      this.allPets = data.results
    })
  }
}
