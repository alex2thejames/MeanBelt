import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplaypetComponent } from './displaypet/displaypet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { NewpetComponent } from './newpet/newpet.component';
import { AllpetsComponent } from './allpets/allpets.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaypetComponent,
    EditpetComponent,
    NewpetComponent,
    AllpetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
