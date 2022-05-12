import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@datas/services/auth/auth.service';
import { UserService } from '@datas/services/base/user/user.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.isLogin()) {
      this.router.navigate(['workspace']);
    } else {
      localStorage.clear();
      this.createRegisterForm();
    }
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.localStorageService.setToken(response.data.token);
          let email = this.registerForm.value.email;
          this.setUserByEmail(email);
          this.router.navigate(['workspace']);
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    } else {
      this.isEnterEmail();
      this.isEnterLastName();
    }
  }

  setUserByEmail(email: string) {
    this.userService.getUserByEmail(email).subscribe((response) => {
      this.localStorageService.setUser(response.data);
    });
  }

  isLogin() {
    return this.localStorageService.getToken();
  }

  isEnterFirstName() {
    if (!this.registerForm.value.lastName) {
      this.toastrService.error('First Name, enter min 2 characters!');
    }
  }

  isEnterLastName() {
    if (this.registerForm.get('lastName').hasError('required')) {
      this.toastrService.error('Last Name, enter');
    } else if (this.registerForm.get('lastName').hasError('minlength')) {
      this.toastrService.error('Last Name, enter min 2 characters!');
    }
  }

  isEnterEmail() {
    if (this.registerForm.get('email').hasError('required')) {
      this.toastrService.error('Email, enter correct email!');
    } else if (this.registerForm.get('email').hasError('email')) {
      this.toastrService.error('Email, enter corrsect email!');
    }
  }

  isEnterPassword() {
    if (!this.registerForm.value.password.valid) {
      this.toastrService.error('Password, enter min 8 characters!');
    }
  }
}
