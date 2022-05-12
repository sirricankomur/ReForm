import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@datas/services/auth/auth.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.authService.isAuthenticated() &&
      this.localStorageService.getUser().email == 'admin@reform.com'
    ) {
      return true;
    } else {
      this.router.navigate(['workspace']);
      this.toastrService.warning('You are not authorized!', 'Authorization');
      return false;
    }
  }
}
