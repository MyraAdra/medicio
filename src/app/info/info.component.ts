import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() title='Hospital';
  @Input() description='Services';
  @Input() iconname='icofont-ambulance';


  constructor() { }

  ngOnInit(): void {
  }

}
