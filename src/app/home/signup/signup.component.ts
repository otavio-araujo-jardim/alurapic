import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            userName: ['', [
                Validators.required,
                lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]],
            password: ['', [
                Validators.required,                
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        })
    }


}