import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UerListService } from 'src/app/services/uer-list.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  formGroup!: FormGroup;
  public buttonName: any = 'Show';
  public show: boolean = true;
  router: any;
  showError: boolean = false;
  constructor(public userListService: UerListService) {}
  
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  userLogin() {
    debugger;
    if (this.formGroup.valid || this.show) {
      const body = this.formGroup.value;
      this.userListService.addUser('/register', body).subscribe(
        (responce) => {
          if (responce) {
            sessionStorage.setItem('token', responce.token);
            console.log(responce);
            alert('User successfully added with ID : 4');
            this.formGroup.reset();
          } else {
            alert('false');
          }
        },
        (err) => {
          this.showError = true;
        }
      );
    } else {
      alert('Invalid details');
    }
  }
  Reset() {
    this.formGroup.reset();
  }
  ngOnInit(): void {
    this.initForm();
  }
}
