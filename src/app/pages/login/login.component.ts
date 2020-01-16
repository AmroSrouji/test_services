import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "test";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLogin(){
    this.router.navigateByUrl("/services");
  }
}
