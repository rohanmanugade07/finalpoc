import { UerListService } from './../../../../services/uer-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  userList:any=[]
  collection = []
  page: number = 1;
  totalLength: any; 
  display: boolean = false;
  lat: number = 51.678418;
  lng:number = 7.809007;

  constructor( private uerListService: UerListService) { 

    this.uerListService.getUserList().subscribe(data =>{
      this.userList = data;
      this. totalLength=this.userList.length;
      console.log(data)

    });
  }

  ngOnInit(): void {
  } 

  showDialog() {
      this.display = true;
  }
  
}
