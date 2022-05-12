import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from '@layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { FormCreateLayoutComponent } from '@layouts/form-create-layout/form-create-layout.component';
import { FormCreateLayoutModule } from '@layouts/form-create-layout/form-create-layout.module';
import { WorkspaceLayoutComponent } from './layouts/workspace-layout/workspace-layout.component';
import { AdminLayoutModule } from '@layouts/admin-layout/admin-layout.module';
import { WorkspaceLayoutModule } from '@layouts/workspace-layout/workspace-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ShareComponent } from './modules/share/share.component';
import { ResultComponent } from './modules/result/result.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeLayoutModule } from '@layouts/home-layout/home-layout.module';

import { WorkspaceComponent } from '@modules/workspace/workspace.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { FormCreateComponent } from './modules/form-create/form-create.component';
import { FormEditModule } from '@modules/form-edit/form-edit.module';
import { FormFillLayoutComponent } from './layouts/form-fill-layout/form-fill-layout.component';
import { ResultLayoutModule } from '@layouts/result-layout/result-layout.module';
import { ResultLayoutComponent } from '@layouts/result-layout/result-layout.component';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { UsersModule } from '@modules/users/users.module';
import { UpdateModule } from '@modules/update/update.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FormCreateLayoutComponent,
    WorkspaceLayoutComponent,
    ShareComponent,
    ResultComponent,
    HomeLayoutComponent,
    HomeComponent,
    WorkspaceComponent,
    FormCreateComponent,
    FormFillLayoutComponent,
    ResultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AdminLayoutModule,
    WorkspaceLayoutModule,
    FormCreateLayoutModule ,
    HomeLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ResultLayoutModule,
    DashboardModule,
    UsersModule,
    UpdateModule,

    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
