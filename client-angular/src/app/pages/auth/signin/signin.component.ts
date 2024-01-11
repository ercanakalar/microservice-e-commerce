import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthFormInterface, authForm, signInForm } from 'src/app/core/common/form-shared';
import { AuthService } from 'src/app/core/shared-services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public signInForm: FormGroup<AuthFormInterface>;


  constructor(private authService: AuthService) {
    this.signInForm = signInForm
  }

  onChangeInput(data: { value: string; inputId: string }) {
    this.signInForm.controls[data.inputId as keyof AuthFormInterface]!.setValue(data.value);
  }

  submitForm() {
    if (this.signInForm.valid) {
      this.authService
        .signin({
          email: this.signInForm.controls.email.value,
          password: this.signInForm.controls.password.value,
        })
    }
  }

}
