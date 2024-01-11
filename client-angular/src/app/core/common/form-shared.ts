import { Validators, FormGroup, FormControl } from '@angular/forms';


export interface AuthFormInterface {
    firstName?: FormControl<string>;
    lastName?: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword?: FormControl<string>;
}

export const authForm = new FormGroup<AuthFormInterface>({
    firstName: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    lastName: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    email: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    confirmPassword: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
});

export const signInForm = new FormGroup<AuthFormInterface>({
    email: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
});