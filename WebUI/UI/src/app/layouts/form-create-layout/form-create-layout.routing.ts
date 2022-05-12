import { Routes } from '@angular/router';
import { LoginGuard } from '@core/guards/login.guard';
import { FormCreateComponent } from '@modules/form-create/form-create.component';

export const FormCreateLayoutRoutes: Routes = [
  { path: 'form', component: FormCreateComponent, canActivate: [LoginGuard] },
  {
    path: 'form/:formId/create',
    component: FormCreateComponent,
    canActivate: [LoginGuard],
  },
];
