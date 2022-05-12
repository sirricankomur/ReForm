import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from '@layouts/auth-layout/auth-layout.routing';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '@modules/register/register.component';
import { FormFillComponent } from '@modules/form-fill/form-fill.component';
import { LoginModule } from '@modules/login/login.module';

@NgModule({
  declarations: [RegisterComponent, FormFillComponent],
  imports: [CommonModule, LoginModule, RouterModule.forChild(AuthLayoutRoutes)],
})
export class AuthLayoutModule {}
