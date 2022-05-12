import { Routes } from '@angular/router';
import { LoginGuard } from '@core/guards/login.guard';
import { FormCreateComponent } from '@modules/form-create/form-create.component';
import { FormEditComponent } from '@modules/form-edit/form-edit.component';
import { WorkspaceComponent } from '@modules/workspace/workspace.component';

export const WorkspaceLayoutRoutes: Routes = [
  {
    path: 'workspace',
    component: WorkspaceComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'workspace/create',
    component: FormCreateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'workspace/:formId/edit',
    component: FormEditComponent,
    canActivate: [LoginGuard],
  },
  { path: 'workspace/category/:categoryId', component: WorkspaceComponent },
  { path: 'workspace/form/:userId', component: WorkspaceComponent },
];
