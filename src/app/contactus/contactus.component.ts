import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name='';
  email='';
  subject='';
  message='';

  
  constructor(private apicaller: HttpClient) { }

  sendEmail(){

    const Myheaders= new HttpHeaders({
    "Content-Type": "application/json"
    });
    
    const options = {headers: Myheaders};

    var data={
      name: this.name,
      email:this.email,
      subject:this.subject,
      message:this.message
    }

    this.apicaller.post('http://localhost:3000/sendemail',JSON.stringify(data),options)
    .subscribe(()=>{
      console.log('check your email, we justb sent you and email');
    })
  
  }


  

  ngOnInit(): void {
  }

}
