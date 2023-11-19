import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({

    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),



  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value)
  }
}
