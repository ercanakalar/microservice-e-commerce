import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthFormInterface, authForm } from 'src/app/core/common/form-shared';
import { AuthService } from 'src/app/core/shared-services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public authForm: FormGroup<AuthFormInterface>;

  constructor(private authService: AuthService) {
    this.authForm = authForm
  }

  onChangeInput(data: { value: string; inputId: string }) {
    this.authForm.controls[data.inputId as keyof AuthFormInterface]!.setValue(data.value);
  }

  submitForm() {
    if (this.authForm.valid) {
      this.authService
        .signup({
          firstName: this.authForm.controls.firstName!.value,
          lastName: this.authForm.controls.lastName!.value,
          email: this.authForm.controls.email.value,
          password: this.authForm.controls.password.value,
          confirmPassword: this.authForm.controls.confirmPassword!.value,
        })
    }
  }
}
