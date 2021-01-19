import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @Input() name='Myra Adra';
  @Input() field='Surgeons';
  @Input() imageUrl='https://cdn.pixabay.com/photo/2019/12/06/13/40/anesthesia-4677401__340.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
