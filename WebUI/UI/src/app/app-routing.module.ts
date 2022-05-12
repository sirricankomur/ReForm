import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '@layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { FormCreateLayoutComponent } from '@layouts/form-create-layout/form-create-layout.component';
import { FormFillLayoutComponent } from '@layouts/form-fill-layout/form-fill-layout.component';
import { HomeLayoutComponent } from '@layouts/home-layout/home-layout.component';
import { ResultLayoutComponent } from '@layouts/result-layout/result-layout.component';
import { WorkspaceLayoutComponent } from '@layouts/workspace-layout/workspace-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/home-layout/home-layout.module').then(
            (m) => m.HomeLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/auth-layout/auth-layout.module').then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  }
  ,
  {
    path: '',
    component: WorkspaceLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/workspace-layout/workspace-layout.module').then(
            (m) => m.WorkspaceLayoutModule
          ),
      },
    ],
  }
  ,
  {
    path: '',
    component: FormCreateLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/form-create-layout/form-create-layout.module').then(
            (m) => m.FormCreateLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ResultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/result-layout/result-layout.module').then(
            (m) => m.ResultLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: FormFillLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@layouts/form-fill-layout/form-fill-layout.module').then(
            (m) => m.FormFillLayoutModule
          ),
      },
    ],
  },
  
  {
    path: '**',
    redirectTo: 'workspace'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
