import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '@core/guards/admin.guard';
import { CreateNewUserComponent } from '@modules/create-new-user/create-new-user.component';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { UpdateComponent } from '@modules/update/update.component';
import { UsersComponent } from '@modules/users/users.component';

export const AdminLayoutRoutes: Routes = [
   { path: 'admin', component: DashboardComponent, canActivate:[AdminGuard] },
   { path: 'admin/user/create', component: CreateNewUserComponent, canActivate:[AdminGuard] },
   { path: 'admin/users', component: UsersComponent, canActivate:[AdminGuard] },
   { path: 'admin/user/:userId/update', component: UpdateComponent, canActivate:[AdminGuard] },
];