import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddUserComponent } from './add-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UerListService } from 'src/app/services/uer-list.service';


describe('AddUserComponent', () => {

  let component : AddUserComponent;
  let fixture : ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,ReactiveFormsModule,FormsModule],
      declarations: [AddUserComponent],
      providers : [
        UerListService
      ]

    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });

  it('should create add-user Components', () => {
    expect(component).toBeTruthy();

  });

  it('should call ngOnit', () => {
    expect(component.initForm).toBeTruthy();

  });

  it('should call userLogin', () => {
   /* component.formGroup.setValue({email:'eve.holt@reqres.in',password:'cityslicka'});
    spyOn(component.userListService,'addUser');
    component.userLogin(); */
    
    fixture.detectChanges();
    component.userLogin();
    //expect(component.userListService.addUser).toBeTruthy();
  });

  it('should Reset', () => {
    component.formGroup = new FormGroup({
      email: new FormControl('sls@n.com', [Validators.required]),
      password: new FormControl('asv', [Validators.required]),
    });
    spyOn(component.formGroup,'reset').and.callThrough();
   component.Reset();
   fixture.detectChanges();
  });




});