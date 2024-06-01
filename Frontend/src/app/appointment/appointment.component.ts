import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments:Appointment[]=[];

  constructor(private appointmentServices:AppointmentService){}

  ngOnInit():void{
    this.getAppointments();
  }
  
  getAppointments(){
    this.appointmentServices.getAllAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }

  delete(id:number){
    this.appointmentServices.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }
}
