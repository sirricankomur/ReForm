import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '@datas/models/dto/user-dto';
import { UserService } from '@datas/services/base/user/user.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserDto[];
  dataLoaded: boolean = false;
  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response.data;
      this.dataLoaded = true;
    });
  }

  goToUpdatePage(user) {
    this.localStorageService.setEditedUser(user);
    this.router.navigate(['admin/user/' + user.id + '/update']);
  }

  delete(user) {
    this.userService.delete(user).subscribe(() => {
      this.toastrService.error(
        'The user has been successfully deleted.',
        'Deleted'
      );
      this.ngOnInit();
    });
  }
}
