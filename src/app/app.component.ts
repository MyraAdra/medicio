import { Component, OnInit } from '@angular/core';
import { doctor } from './models/doctor';
import { info } from './models/info';
import { record } from './models/record';
import { HttpClient } from '@angular/common/http';
import { feature } from './models/feature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'medicioAng';

  Info: info[]=[];
  Doctors: doctor[]=[];
  Records: record[]=[];
  Features: feature[]=[];

  constructor(private apiCaller: HttpClient){

  }


  ngOnInit(){

    // let i1= new info();
    // i1.title='Emergency';
    // i1.description='First Info';
    // i1.iconname='icofont-ambulance';
    // this.Info.push(i1);

    // let i2= new info();
    // i2.title='Lab Tests';
    // i2.description='Second Info';
    // i2.iconname='icofont-blood-test';
    // this.Info.push(i2);

    // let i3= new info();
    // i3.title='Pharmacy';
    // i3.description='Third Info';
    // i3.iconname='icofont-pills';
    // this.Info.push(i3);

    // let i4= new info();
    // i4.title='Surgery';
    // i4.description='Forth Info';
    // i4.iconname='icofont-surgeon';
    // this.Info.push(i4);

    this.apiCaller.get('http://localhost:3000/information')
    .subscribe((inf:[])=>{
      this.Info=inf;
    })

    this.apiCaller.get('http://localhost:3000/doctors')
    .subscribe((drs:[])=>{
      this.Doctors=drs;
    })

    this.apiCaller.get('http://localhost:3000/records')
    .subscribe((rec:[])=>{
      this.Records=rec;
    })

    this.apiCaller.get('http://localhost:3000/features')
    .subscribe((feat:[])=>{
      this.Features=feat;
    })

  }
}