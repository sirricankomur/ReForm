import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '@datas/models/base/form';
import { UserDto } from '@datas/models/dto/user-dto';
import { AuthService } from '@datas/services/auth/auth.service';
import { FormService } from '@datas/services/base/form/form.service';
import { UserService } from '@datas/services/base/user/user.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public forms: Form[];
  public dataLoaded = false;
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private formService: FormService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.isLogin()) {
      if (this.localStorageService.getUser().email == 'admin@reform.com') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['workspace']);
      }
    } else {
      localStorage.clear();
    }

    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(
        (response) => {
          this.localStorageService.setToken(response.data.token);
          let email = this.loginForm.value.email;
          this.setUserByEmail(email);
          this.router.navigate(['workspace']);
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    }
  }

  private isLogin() {
    return this.localStorageService.getToken();
  }

  private setUserByEmail(email: string) {
    this.userService.getUserByEmail(email).subscribe((response) => {
      let user = response.data;
      this.localStorageService.setUser(user);
      this.setForms(user);
     
    });
  }

  private setForms(user: UserDto) {
    this.formService.getForms(user.id).subscribe((response) => {
      this.forms = response.data;
      this.localStorageService.setForms(this.forms);
      if (user.email == 'admin@reform.com') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['workspace']);
      }
     // this.dataLoaded = true;
    });
  }
}
