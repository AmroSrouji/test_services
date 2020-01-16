import { Component, OnInit } from '@angular/core';
import { config } from "../../app.config";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      serviceId:"1",
      name:"Årsbokslut",
      description: "description test",
      active: false
    },
    {
      serviceId:"2",
      name:"Apaartment Cleaning Service",
      description: "description test",
      active: false
    },
    {
      serviceId:"3",
      name:"Laundry Bokings",
      description: "description test",
      active: false
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  onToggleService(serviceIndex){
    this.services[serviceIndex].active = !this.services[serviceIndex].active;
  }

  onClickSubmit(){
    const servicesIds = this.services.filter(service => service.active).map(activeService => activeService.serviceId);
    console.log("Selected Services", servicesIds);
  }
}
