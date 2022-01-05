import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UerListService } from 'src/app/services/uer-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId:number = 0 
  userData:any;
 
  constructor( private uerDataService: UerListService, private route:ActivatedRoute) { 

    // this.uerDataService.getUserDetails().subscribe((data:any) =>{
    //   this.userData = data.data;
    //  console.log(data.data)

    // });

  }
  ngOnInit(): void {
    this.getParams()
    this.getUserDetailById()
  }

  getParams(){
    this.route.params.subscribe((params:Params)=>{
     this.userId = params['id']
    }) }

    getUserDetailById(){
      this.uerDataService.getUserDetails(this.userId).subscribe((data: any) => {
        this.userData = data.data;
        console.log(data.data);
      });
    }

 
}


