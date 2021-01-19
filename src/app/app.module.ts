import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RecordComponent } from './record/record.component';
import { FeatureComponent } from './feature/feature.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    DoctorComponent,
    RecordComponent,
    FeatureComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
