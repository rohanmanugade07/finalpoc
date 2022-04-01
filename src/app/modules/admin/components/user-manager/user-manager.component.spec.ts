import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { UserManagerComponent } from "./user-manager.component";

import { userList } from "src/app/Mock/user-list";
import { UerListService } from "src/app/services/uer-list.service";
import { of } from "rxjs";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AdminModule } from "../../admin.module";


describe('UserManagerComponent',()=>{
    let component : UserManagerComponent;
    let fixture : ComponentFixture<UserManagerComponent>;
    let mockUserList =  userList;
    let service : UerListService;
    

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports : [HttpClientTestingModule,HttpClientModule,AdminModule],
            declarations:[UserManagerComponent],
            providers : [UerListService]
            
        }).compileComponents;
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(UserManagerComponent);
        component = fixture.componentInstance;
        service = TestBed.get(UerListService);
    });

    
    it('should create UserManagerComponent Components',()=>{
        expect(component).toBeTruthy();
    });

    it('should subscribe method call',fakeAsync(()=>{
        let userSpy = spyOn(service,'getUserList').and.returnValue(of(mockUserList));
        let subSpy= spyOn(service.getUserList(),'subscribe');
        component.ngOnInit();
        tick();
        expect(userSpy).toHaveBeenCalledBefore(subSpy);
        expect(subSpy).toHaveBeenCalled();
    }));

    it('should execution with subscribe method',fakeAsync(()=>{
            service.getUserList().subscribe(data =>{
            component.userList = data;
            component. totalLength= component.userList.length;
            expect(component.totalLength).toBeGreaterThan(0);  
        
         }); 
    }));

    it('should show dialouge', () => {
        component.showDialog();
        expect(component.display).toBe(true);
      });
     
});