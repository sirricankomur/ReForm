import { Routes } from '@angular/router';
import { LoginGuard } from '@core/guards/login.guard';
import { HomeLayoutComponent } from '@layouts/home-layout/home-layout.component';
import { FormFillComponent } from '@modules/form-fill/form-fill.component';

export const FormFillLayoutRoutes: Routes = [
  {
    path: 'form/:formId/fill',
    component: FormFillComponent,
    canActivate: [LoginGuard],
  },
  { path: 'home', component: HomeLayoutComponent },
];
