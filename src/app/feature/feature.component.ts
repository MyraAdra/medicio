import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() title='Doctors';
  @Input() desc='Number of doctors';
  @Input() iconname='icofont-doctor-alt';

  constructor() { }

  ngOnInit(): void {
  }

}
