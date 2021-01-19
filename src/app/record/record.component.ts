import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() number=58;
  @Input() title='Doctors';
  @Input() desc='Number of doctors';
  @Input() iconname='icofont-doctor-alt';

  constructor() { }

  ngOnInit(): void {
  }

}
