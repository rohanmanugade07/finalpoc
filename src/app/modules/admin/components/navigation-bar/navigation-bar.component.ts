import { LoginService } from './../../../../login.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  public sidebarShow: boolean = false;
 
  constructor(private loginService: AuthServiceService) { }

  logoutUser() {
    this.loginService.logout();
  }
  ngOnInit(): void {
  }

}
