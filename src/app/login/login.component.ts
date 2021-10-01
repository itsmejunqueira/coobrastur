import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  login: any;
  senha: any;
  formlogin: FormGroup;

  constructor(
    private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formlogin = this.fb.group({
      login: ["", Validators.compose([Validators.required])],
      senha: ["", Validators.compose([Validators.required])],
    });
  }


}
