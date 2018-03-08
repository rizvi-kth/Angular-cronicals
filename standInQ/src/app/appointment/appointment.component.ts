import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  //styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() 
  parentCompData;

  @Output()
  triggerAtParent = new EventEmitter();

  specialAppointmant = "A special public appointment"

  private _appointmants = {
    name:'Rizvi',
    age:37
  };

  handleClick():void{
    console.log("Button Clicked!");
    this.triggerAtParent.emit("New Changed title!!");
  }

  logFoo(){
    console.log("Logging foo on child component!");
    
  }


  constructor() { }

  ngOnInit() {
  }

}
