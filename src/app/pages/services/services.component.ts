import { Component, OnInit } from '@angular/core';
import { config } from "../../app.config";
import { CommonService } from "../../providers/common.service";


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any = [];

  constructor(public commonService: CommonService) { }

  ngOnInit() {
    return this.commonService.getServices().subscribe(services => this.services = services);
  }

  onToggleService(serviceIndex){
    this.services[serviceIndex].active = !this.services[serviceIndex].active;
  }

  onClickSubmit(){
    const servicesIds = this.services.filter(service => service.active).map(activeService => activeService.serviceId);
    console.log("Selected Services", servicesIds);
  }
}
