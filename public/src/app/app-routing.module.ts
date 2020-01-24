import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpetsComponent } from './allpets/allpets.component';
import { DisplaypetComponent } from './displaypet/displaypet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { NewpetComponent } from './newpet/newpet.component';


const routes: Routes = [
  { path: "pets", component: AllpetsComponent },
  { path: "pets/new", component: NewpetComponent },
  { path: "pets/:id", component: DisplaypetComponent },
  { path: "pets/:id/edit", component: EditpetComponent },
  { path: "", pathMatch: "full", redirectTo: "/pets" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
