import { Component, OnInit } from '@angular/core';
import { UserDto } from '@datas/models/dto/user-dto';
import { UserService } from '@datas/services/base/user/user.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  user: UserDto;
  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.localStorageService.getEditedUser();
  }

  getUser() {
    return this.user;
  }

  update(user) {
    this.userService.update(user).subscribe(() => {
      this.toastrService.success(
        'The user has been successfully updated.',
        'Updated'
      );
      this.localStorageService.setEditedUser(user);
    });
  }

  setFirstName(firstName) {
    this.user.firstName = firstName.target.value;
  }

  setLastName(lastName) {
    this.user.lastName = lastName.target.value;
  }

  setEmail(email) {
    this.user.email = email.target.value;
  }

  setStatus(status) {
    this.user.status = status;
  }
}
