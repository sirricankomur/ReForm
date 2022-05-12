import { Component } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { UserDto } from '@datas/models/dto/user-dto';
import { FormUserService } from '@datas/services/intermediate/form-user/form-user.service';
import { FormService } from '@datas/services/base/form/form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reform';
  user: UserDto;
  forms: Form[];

  constructor(
    private formService: FormService,
    private formUserService: FormUserService,
    private localStorageService: LocalStorageService
  ) {
    if (localStorageService.getUser()) {
      this.user = localStorageService.getUser();
      this.setFormUsers();
      this.setForms(this.user)
      this.localStorageService.setFormResponses([]);
    }
  }

  setFormUsers() {
    this.formUserService.getAll().subscribe((response) => {
      let formUsers = response.data;
      this.localStorageService.setFormUsers(formUsers);
    });
  }

  setForms(user: UserDto) {
    this.formService.getForms(user.id).subscribe((response) => {
      this.forms = response.data;
      this.localStorageService.setForms(this.forms);
    });
  }
}
